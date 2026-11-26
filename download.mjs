import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, 'public');
const ORIGIN = 'https://pivenilya.com';

const HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  Accept: '*/*',
  'Accept-Language': 'en-US,en;q=0.9',
};

const HTML_ROUTES = [
  { route: '/portfolio', targets: ['index.html', 'portfolio/index.html'] },
  { route: '/', targets: ['home.html'] },
  { route: '/about', targets: ['about/index.html'] },
  { route: '/contacts', targets: ['contacts/index.html'] },
  { route: '/work/firma', targets: ['work/firma/index.html'] },
  { route: '/work/un-kisu', targets: ['work/un-kisu/index.html'] },
  { route: '/work/hotlaser', targets: ['work/hotlaser/index.html'] },
  { route: '/work/rimma', targets: ['work/rimma/index.html'] },
  { route: '/work/liverpool-house', targets: ['work/liverpool-house/index.html'] },
  { route: '/work/yantos-interesting-facts', targets: ['work/yantos-interesting-facts/index.html'] },
  { route: '/work/vhf-radar-p-18ts', targets: ['work/vhf-radar-p-18ts/index.html'] },
];

const CORE_ASSETS = [
  '/wp-content/themes/piven/dist/assets/site-lfvPwyw1.css',
  '/wp-content/themes/piven/dist/assets/site-BbXVgEu6.js',
  '/wp-content/themes/piven/dist/assets/main-Cm-r6kin.js',
  '/wp-content/themes/piven/dist/fonts/tt-norms-pro-450.woff2',
  '/wp-content/themes/piven/dist/fonts/tt-norms-pro-500.woff2',
  '/wp-content/themes/piven/dist/fonts/tt-norms-pro-600.woff2',
  '/wp-content/themes/piven/dist/fonts/zt-neue-ralewe-600.woff2',
  '/wp-content/themes/piven/dist/apple-touch-icon.png',
  '/wp-content/themes/piven/dist/scenes/hero/preset.json',
  '/wp-content/themes/piven/dist/scenes/hero/color.webp',
  '/wp-content/themes/piven/dist/scenes/hero/depth.webp',
  '/wp-content/themes/piven/dist/scenes/hero/photo.webp',
];

const TEXT_EXTENSIONS = new Set(['.html', '.css', '.js', '.mjs', '.json', '.svg']);

const downloaded = new Map();
const failed = [];

async function fetchBuffer(url) {
  const res = await fetch(url, { headers: HEADERS, redirect: 'follow' });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for ${url}`);
  }
  const arrayBuffer = await res.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

async function writeLocal(relPath, buffer) {
  const cleanRel = relPath.replace(/^\/+/, '');
  const fullPath = path.join(PUBLIC_DIR, cleanRel);
  await fs.mkdir(path.dirname(fullPath), { recursive: true });
  await fs.writeFile(fullPath, buffer);
  return fullPath;
}

function rewriteUrls(text) {
  return text
    .replaceAll('https://pivenilya.com/', '/')
    .replaceAll('https:\\/\\/pivenilya.com\\/', '\\/')
    .replaceAll('http://pivenilya.com/', '/')
    .replaceAll('http:\\/\\/pivenilya.com\\/', '\\/')
    .replaceAll('"https://pivenilya.com"', '"/"')
    .replaceAll("'https://pivenilya.com'", "'/'");
}

function extractAssetPaths(text) {
  const found = new Set();

  // Match full or relative /wp-content/... URLs (including Unicode filenames and .m4a)
  const wpRegex = /(?:https?:\/\/pivenilya\.com)?(\/wp-content\/[^\s"'`<>\\]+?\.(?:css|js|mjs|json|woff2?|ttf|otf|webp|png|jpe?g|gif|svg|mp4|webm|mp3|m4a|wav|ogg|ico))/gi;
  for (const match of text.matchAll(wpRegex)) {
    found.add(match[1]);
  }

  // Match escaped URLs inside JSON or JS
  const escapedRegex = /(?:https?:\\\/\\\/pivenilya\.com)?(\\\/wp-content\\\/[^\s"'`<>]+?\.(?:css|js|mjs|json|woff2?|ttf|otf|webp|png|jpe?g|gif|svg|mp4|webm|mp3|m4a|wav|ogg|ico))/gi;
  for (const match of text.matchAll(escapedRegex)) {
    found.add(match[1].replaceAll('\\/', '/'));
  }

  // Match relative dist sub-paths such as scenes/..., film/..., assets/..., fonts/..., audio/...
  const distRelRegex = /["'`]((?:scenes|film|audio|assets|fonts)\/[a-zA-Z0-9_\-./]+\.(?:css|js|json|woff2?|webp|png|jpe?g|svg|mp4|webm|mp3|wav|ogg))["'`]/gi;
  for (const match of text.matchAll(distRelRegex)) {
    found.add(`/wp-content/themes/piven/dist/${match[1]}`);
  }

  return found;
}

async function downloadAsset(urlPath, optional = false) {
  const cleanPath = urlPath.split('?')[0].split('#')[0];
  if (downloaded.has(cleanPath)) return null;

  const fullUrl = `${ORIGIN}${cleanPath}`;
  try {
    const buf = await fetchBuffer(fullUrl);
    const ext = path.extname(cleanPath).toLowerCase();
    let finalBuf = buf;
    let textContent = null;
    if (TEXT_EXTENSIONS.has(ext)) {
      textContent = rewriteUrls(buf.toString('utf8'));
      finalBuf = Buffer.from(textContent, 'utf8');
    }
    await writeLocal(cleanPath, finalBuf);
    downloaded.set(cleanPath, finalBuf.length);
    console.log(`[OK] ${cleanPath} (${finalBuf.length} bytes)`);
    return textContent;
  } catch (err) {
    if (!optional) {
      failed.push({ path: cleanPath, error: err.message });
      console.warn(`[FAIL] ${cleanPath}: ${err.message}`);
    } else {
      console.log(`[SKIP optional] ${cleanPath}: ${err.message}`);
    }
    return null;
  }
}

async function main() {
  console.log(`Downloading site assets into ${PUBLIC_DIR}...`);
  await fs.mkdir(PUBLIC_DIR, { recursive: true });

  const discoveredAssets = new Set(CORE_ASSETS);
  const optionalAssets = new Set();

  // 1. Fetch HTML routes
  for (const item of HTML_ROUTES) {
    const url = `${ORIGIN}${item.route}`;
    try {
      const buf = await fetchBuffer(url);
      const rawHtml = buf.toString('utf8');
      for (const asset of extractAssetPaths(rawHtml)) {
        discoveredAssets.add(asset);
      }
      const rewrittenHtml = rewriteUrls(rawHtml);
      for (const target of item.targets) {
        await writeLocal(target, Buffer.from(rewrittenHtml, 'utf8'));
        console.log(`[HTML OK] ${item.route} -> ${target} (${rewrittenHtml.length} chars)`);
      }
    } catch (err) {
      failed.push({ path: item.route, error: err.message });
      console.error(`[HTML FAIL] ${item.route}: ${err.message}`);
    }
  }

  // 2. Download core + HTML-discovered assets and recursively inspect text bundles
  const queue = [...discoveredAssets];
  const processed = new Set();

  while (queue.length > 0) {
    const nextPath = queue.shift();
    if (processed.has(nextPath)) continue;
    processed.add(nextPath);

    const isOptional = optionalAssets.has(nextPath);
    const textContent = await downloadAsset(nextPath, isOptional);
    if (textContent) {
      const nested = extractAssetPaths(textContent);
      for (const n of nested) {
        if (!processed.has(n)) {
          // Assets heuristically constructed in JS may be templates or non-existent
          if (nextPath.endsWith('.js')) {
            optionalAssets.add(n);
          }
          queue.push(n);
        }
      }
    }
  }

  // 3. Probe common scene/film assets referenced dynamically by main bundle
  const dynamicProbes = [
    '/wp-content/themes/piven/dist/film/hero-about.mp4',
    '/wp-content/themes/piven/dist/scenes/about/preset.json',
    '/wp-content/themes/piven/dist/scenes/about/color.webp',
    '/wp-content/themes/piven/dist/scenes/about/depth.webp',
    '/wp-content/themes/piven/dist/scenes/about/photo.webp',
    '/wp-content/themes/piven/dist/scenes/contacts/preset.json',
    '/wp-content/themes/piven/dist/scenes/contacts/color.webp',
    '/wp-content/themes/piven/dist/scenes/contacts/depth.webp',
    '/wp-content/themes/piven/dist/scenes/contacts/photo.webp',
  ];
  for (const probe of dynamicProbes) {
    if (!downloaded.has(probe)) {
      await downloadAsset(probe, true);
    }
  }

  console.log('\n--- Download Summary ---');
  console.log(`Total files downloaded: ${downloaded.size}`);
  const totalBytes = [...downloaded.values()].reduce((a, b) => a + b, 0);
  console.log(`Total asset bytes: ${(totalBytes / (1024 * 1024)).toFixed(2)} MB`);
  if (failed.length > 0) {
    console.warn(`Failures (${failed.length}):`);
    for (const f of failed) {
      console.warn(`  - ${f.path}: ${f.error}`);
    }
  } else {
    console.log('All required routes and assets downloaded cleanly.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
