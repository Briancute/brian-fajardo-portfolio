import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hero = path.join(__dirname, 'public/wp-content/themes/piven/dist/scenes/hero/photo.webp');
const outEn = path.join(__dirname, 'public/wp-content/themes/piven/dist/og-en.jpg');

const portrait = await sharp(hero)
  .resize(1200, 630, { fit: 'cover', position: 'center' })
  .modulate({ brightness: 0.72 })
  .toBuffer();

const overlay = Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="rgba(14,12,11,0.92)"/>
        <stop offset="58%" stop-color="rgba(14,12,11,0.58)"/>
        <stop offset="100%" stop-color="rgba(14,12,11,0.16)"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#g)"/>
    <text x="72" y="252" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="600" fill="#e8e2d5" letter-spacing="-1.5">Brian Fajardo</text>
    <text x="72" y="318" font-family="system-ui, -apple-system, sans-serif" font-size="30" fill="#b5401e" font-weight="500">Web, UI/UX &amp; Motion Designer</text>
    <text x="72" y="555" font-family="system-ui, -apple-system, sans-serif" font-size="22" fill="rgba(232,226,213,0.68)">Philippines, Cebu · Portfolio</text>
  </svg>
`);

await sharp(portrait)
  .composite([{ input: overlay }])
  .jpeg({ quality: 92 })
  .toFile(outEn);

console.log('Generated bespoke og-en.jpg at', outEn);
