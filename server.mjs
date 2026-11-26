import http from 'node:http';
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, 'public');
const PORT = Number(process.env.PORT || 3000);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mp3': 'audio/mpeg',
  '.m4a': 'audio/mp4',
  '.wav': 'audio/wav',
  '.ogg': 'audio/ogg',
};

async function resolveFile(urlPathname) {
  const cleanPath = decodeURIComponent(urlPathname.split('?')[0]);
  if (cleanPath.includes('..')) return null;

  const candidates = [];
  if (cleanPath === '/' || cleanPath === '') {
    candidates.push(path.join(PUBLIC_DIR, 'index.html'));
  } else {
    const trimmed = cleanPath.replace(/^\/+/, '').replace(/\/+$/, '');
    candidates.push(path.join(PUBLIC_DIR, trimmed));
    candidates.push(path.join(PUBLIC_DIR, trimmed, 'index.html'));
    candidates.push(path.join(PUBLIC_DIR, `${trimmed}.html`));
  }

  for (const candidate of candidates) {
    if (!candidate.startsWith(PUBLIC_DIR)) continue;
    try {
      const stat = await fsp.stat(candidate);
      if (stat.isFile()) {
        return { filePath: candidate, stat };
      }
    } catch {
      // try next candidate
    }
  }
  return null;
}

const server = http.createServer(async (req, res) => {
  const method = req.method || 'GET';
  if (method !== 'GET' && method !== 'HEAD') {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
    return;
  }

  const reqUrl = new URL(req.url || '/', `http://localhost:${PORT}`);
  const resolved = await resolveFile(reqUrl.pathname);

  if (!resolved) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`Not Found: ${reqUrl.pathname}`);
    return;
  }

  const { filePath, stat } = resolved;
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  const totalSize = stat.size;
  const rangeHeader = req.headers.range;

  if (rangeHeader && rangeHeader.startsWith('bytes=')) {
    const [startStr, endStr] = rangeHeader.replace('bytes=', '').split('-');
    const start = startStr ? Number.parseInt(startStr, 10) : 0;
    const end = endStr ? Math.min(Number.parseInt(endStr, 10), totalSize - 1) : totalSize - 1;

    if (Number.isNaN(start) || Number.isNaN(end) || start > end || start >= totalSize) {
      res.writeHead(416, { 'Content-Range': `bytes */${totalSize}` });
      res.end();
      return;
    }

    const chunkSize = end - start + 1;
    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${totalSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunkSize,
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
    });

    if (method === 'HEAD') {
      res.end();
      return;
    }

    fs.createReadStream(filePath, { start, end }).pipe(res);
    return;
  }

  res.writeHead(200, {
    'Accept-Ranges': 'bytes',
    'Content-Length': totalSize,
    'Content-Type': contentType,
    'Cache-Control': 'no-cache',
  });

  if (method === 'HEAD') {
    res.end();
    return;
  }

  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Piven portfolio local mirror running at http://localhost:${PORT}/portfolio`);
});
