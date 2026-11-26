import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_HERO = process.env.HERO_PHOTO || '';
const SRC_ABOUT = process.env.ABOUT_PHOTO || '';
const DIST = path.join(__dirname, 'public/wp-content/themes/piven/dist');
const PROFILE_OUT = path.join(__dirname, 'public/wp-content/uploads/2026/10/Profile_photo.webp');

const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);
const smoothstep = (e0, e1, x) => {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
};

async function composeWidescreen(foregroundBuf, fgW, fgH, outW, outH, featherRatio = 0.16, fgLeftOverride = null) {
  const fg = await sharp(foregroundBuf)
    .resize(fgW, fgH, { fit: 'fill' })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const rawBg = Buffer.alloc(outW * outH * 3);
  const fgLeft = fgLeftOverride ?? Math.round((outW - fgW) / 2);
  const fgRight = fgLeft + fgW;
  const sampleBand = Math.max(8, Math.round(fgW * 0.08));

  for (let y = 0; y < outH; y++) {
    const sy = clamp(y, 0, fgH - 1);
    for (let x = 0; x < outW; x++) {
      let sx;
      let wingFade = 1.0;
      if (x < fgLeft) {
        const dist = fgLeft - x;
        sx = clamp(
          Math.round((dist % (sampleBand * 2)) < sampleBand ? dist % sampleBand : sampleBand - (dist % sampleBand)),
          0,
          fgW - 1
        );
        wingFade = 1.0 - 0.55 * smoothstep(0, Math.max(1, fgLeft), dist);
      } else if (x >= fgRight) {
        const dist = x - fgRight;
        const rightBase = fgW - 1 - sampleBand;
        sx = clamp(
          Math.round(
            rightBase + ((dist % (sampleBand * 2)) < sampleBand ? dist % sampleBand : sampleBand - (dist % sampleBand))
          ),
          0,
          fgW - 1
        );
        wingFade = 1.0 - 0.6 * smoothstep(0, Math.max(1, outW - fgRight), dist);
      } else {
        sx = x - fgLeft;
      }

      const srcIdx = (sy * fgW + sx) * 4;
      const dstIdx = (y * outW + x) * 3;
      rawBg[dstIdx] = Math.round(fg.data[srcIdx] * wingFade);
      rawBg[dstIdx + 1] = Math.round(fg.data[srcIdx + 1] * wingFade);
      rawBg[dstIdx + 2] = Math.round(fg.data[srcIdx + 2] * wingFade);
    }
  }

  const blurredBg = await sharp(rawBg, { raw: { width: outW, height: outH, channels: 3 } })
    .blur(42)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const out = Buffer.from(blurredBg.data);
  const featherPx = Math.max(1, Math.round(fgW * featherRatio));

  for (let y = 0; y < outH; y++) {
    for (let x = 0; x < fgW; x++) {
      const dx = fgLeft + x;
      if (dx < 0 || dx >= outW) continue;
      const edgeDist = Math.min(x, fgW - 1 - x);
      const alpha = smoothstep(0, featherPx, edgeDist);
      const bgIdx = (y * outW + dx) * 3;
      const fgIdx = (y * fgW + x) * 4;
      out[bgIdx] = Math.round(out[bgIdx] * (1 - alpha) + fg.data[fgIdx] * alpha);
      out[bgIdx + 1] = Math.round(out[bgIdx + 1] * (1 - alpha) + fg.data[fgIdx + 1] * alpha);
      out[bgIdx + 2] = Math.round(out[bgIdx + 2] * (1 - alpha) + fg.data[fgIdx + 2] * alpha);
    }
  }

  return sharp(out, { raw: { width: outW, height: outH, channels: 3 } });
}

async function generateHeroDepth(colorBuffer1280, w = 1280, h = 720) {
  const colorRaw = await sharp(colorBuffer1280).raw().toBuffer({ resolveWithObject: true });
  const buf = Buffer.alloc(w * h);

  for (let py = 0; py < h; py++) {
    const y = py / h;
    for (let px = 0; px < w; px++) {
      const x = px / w;
      const cIdx = (py * w + px) * colorRaw.info.channels;
      const lum =
        (0.2126 * colorRaw.data[cIdx] +
          0.7152 * colorRaw.data[cIdx + 1] +
          0.0722 * colorRaw.data[cIdx + 2]) /
        255;

      let depth = 0.14 + 0.14 * smoothstep(0.62, 1.0, y);

      const beamDist = Math.abs((x - 0.52) * 0.72 + (y - 0.38) * 0.69);
      const beam = (1 - smoothstep(0.05, 0.32, beamDist)) * lum;
      depth += 0.1 * beam;

      if (y > 0.5) {
        const torsoT = clamp((y - 0.5) / 0.5, 0, 1);
        const halfW = 0.042 + 0.125 * Math.pow(torsoT, 0.45);
        const dx = Math.abs(x - 0.498) / halfW;
        if (dx < 1.25) {
          const torsoMask = 1 - smoothstep(0.78, 1.22, dx);
          const shoulderFade = smoothstep(0.5, 0.6, y);
          const torsoProfile = 0.62 + 0.16 * Math.sqrt(Math.max(0, 1 - Math.min(1, dx * dx)));
          const torsoDepth = torsoProfile * shoulderFade;
          depth = Math.max(depth, depth * (1 - torsoMask) + torsoDepth * torsoMask);
        }
      }

      const neckDx = Math.abs(x - 0.498) / 0.032;
      if (y >= 0.48 && y <= 0.6 && neckDx < 1.25) {
        const neckMask =
          (1 - smoothstep(0.72, 1.2, neckDx)) *
          smoothstep(0.48, 0.52, y) *
          (1 - smoothstep(0.56, 0.62, y));
        depth = Math.max(depth, 0.76 * neckMask);
      }

      const hx = (x - 0.498) / 0.054;
      const hy = (y - 0.415) / 0.108;
      const hr2 = hx * hx + hy * hy;
      if (hr2 < 1.25) {
        const headMask = 1 - smoothstep(0.84, 1.18, Math.sqrt(hr2));
        const zSphere = Math.sqrt(Math.max(0, 1 - Math.min(1, hr2 * 0.85)));
        const headDepth = 0.76 + 0.17 * zSphere;
        depth = Math.max(depth, depth * (1 - headMask) + headDepth * headMask);
      }

      const gx = (x - 0.498) / 0.032;
      const gy = (y - 0.435) / 0.022;
      const gr = Math.sqrt(gx * gx + gy * gy);
      if (gr < 1.2) {
        const gMask = 1 - smoothstep(0.4, 1.15, gr);
        depth = Math.max(depth, 0.95 * gMask);
      }

      const subjectWeight = smoothstep(0.55, 0.85, depth);
      depth = clamp(depth + (lum - 0.35) * 0.06 * subjectWeight, 0.05, 0.98);
      buf[py * w + px] = Math.round(depth * 255);
    }
  }

  return sharp(buf, { raw: { width: w, height: h, channels: 1 } })
    .blur(2.8)
    .webp({ quality: 92 });
}

async function generateAboutDepth(colorBuffer1280, w = 1280, h = 720) {
  const colorRaw = await sharp(colorBuffer1280).raw().toBuffer({ resolveWithObject: true });
  const buf = Buffer.alloc(w * h);

  // Close-up B&W portrait placed at x in [610/1920..1420/1920] = [0.318..0.740]:
  // Eye midpoint ~(0.485, 0.392), cranium center ~(0.525, 0.43), turtleneck/shoulder below y=0.62
  for (let py = 0; py < h; py++) {
    const y = py / h;
    for (let px = 0; px < w; px++) {
      const x = px / w;
      const cIdx = (py * w + px) * colorRaw.info.channels;
      const lum =
        (0.2126 * colorRaw.data[cIdx] +
          0.7152 * colorRaw.data[cIdx + 1] +
          0.0722 * colorRaw.data[cIdx + 2]) /
        255;

      let depth = 0.09;

      // Turtleneck collar and angled right shoulder
      if (y > 0.62) {
        const t = clamp((y - 0.62) / 0.38, 0, 1);
        const shoulderCenter = 0.56 + 0.06 * t;
        const halfW = 0.14 + 0.16 * Math.pow(t, 0.5);
        const dx = Math.abs(x - shoulderCenter) / halfW;
        if (dx < 1.2) {
          const m = (1 - smoothstep(0.75, 1.15, dx)) * smoothstep(0.62, 0.72, y);
          const z = 0.66 + 0.15 * Math.sqrt(Math.max(0, 1 - Math.min(1, dx * dx)));
          depth = Math.max(depth, z * m);
        }
      }

      // Close-up 3D head/cranium ellipsoid (slightly tilted/three-quarter view)
      const hx = (x - 0.522) / 0.145;
      const hy = (y - 0.425) / 0.325;
      const hr = Math.sqrt(hx * hx + hy * hy);
      if (hr < 1.2) {
        const m = 1 - smoothstep(0.8, 1.14, hr);
        const z = 0.76 + 0.18 * Math.sqrt(Math.max(0, 1 - Math.min(1, hr * hr * 0.85)));
        depth = Math.max(depth, depth * (1 - m) + z * m);
      }

      // Forehead, cheekbones, nose bridge & glasses relief (peak closest to camera)
      const gx = (x - 0.486) / 0.088;
      const gy = (y - 0.415) / 0.085;
      const gr = Math.sqrt(gx * gx + gy * gy);
      if (gr < 1.25) {
        const gMask = 1 - smoothstep(0.35, 1.15, gr);
        depth = Math.max(depth, 0.96 * gMask);
      }

      // Nose & lips foreground ridge
      const nx = (x - 0.478) / 0.048;
      const ny = (y - 0.525) / 0.095;
      const nr = Math.sqrt(nx * nx + ny * ny);
      if (nr < 1.2) {
        const nMask = 1 - smoothstep(0.35, 1.12, nr);
        depth = Math.max(depth, 0.94 * nMask);
      }

      const subjectWeight = smoothstep(0.5, 0.85, depth);
      depth = clamp(depth + (lum - 0.35) * 0.045 * subjectWeight, 0.04, 0.99);
      buf[py * w + px] = Math.round(depth * 255);
    }
  }

  return sharp(buf, { raw: { width: w, height: h, channels: 1 } })
    .blur(4)
    .webp({ quality: 92 });
}

async function main() {
  // 1. Hero scene (unchanged)
  const heroFg = await sharp(SRC_HERO)
    .resize(839, 1120, { fit: 'fill' })
    .extract({ left: 0, top: 20, width: 839, height: 1080 })
    .toBuffer();

  const hero1920 = await composeWidescreen(heroFg, 839, 1080, 1920, 1080, 0.15);
  const heroPhotoPath = path.join(DIST, 'scenes/hero/photo.webp');
  await hero1920.webp({ quality: 92 }).toFile(heroPhotoPath);

  const heroColorBuf = await sharp(heroPhotoPath).resize(1280, 720).webp({ quality: 92 }).toBuffer();
  await fs.writeFile(path.join(DIST, 'scenes/hero/color.webp'), heroColorBuf);
  await (await generateHeroDepth(heroColorBuf, 1280, 720)).toFile(path.join(DIST, 'scenes/hero/depth.webp'));
  console.log('[OK] Hero scene refreshed');

  // 2. About scene using new close-up B&W portrait
  const aboutMeta = await sharp(SRC_ABOUT).metadata();
  const scaledW = Math.round((aboutMeta.width / aboutMeta.height) * 1110);
  // Crop 30px from top so eyes align closely with v=0.392 in 1080p
  const aboutFg = await sharp(SRC_ABOUT)
    .resize(scaledW, 1110, { fit: 'fill' })
    .extract({ left: 0, top: 30, width: scaledW, height: 1080 })
    .toBuffer();

  // Place fgLeft at 605px so eye midpoint (~0.395 * scaledW + 605) lands near u=0.485 (931px)
  const about1920 = await composeWidescreen(aboutFg, scaledW, 1080, 1920, 1080, 0.16, 605);
  const aboutPhotoPath = path.join(DIST, 'scenes/about/photo.webp');
  await about1920.webp({ quality: 92 }).toFile(aboutPhotoPath);
  console.log(`[OK] Wrote ${aboutPhotoPath} (src ${aboutMeta.width}x${aboutMeta.height} -> fg ${scaledW}x1080 at left=605)`);

  const aboutColorBuf = await sharp(aboutPhotoPath).resize(1280, 720).webp({ quality: 92 }).toBuffer();
  const aboutColorPath = path.join(DIST, 'scenes/about/color.webp');
  await fs.writeFile(aboutColorPath, aboutColorBuf);
  console.log('[OK] Wrote', aboutColorPath);

  const aboutDepthPath = path.join(DIST, 'scenes/about/depth.webp');
  await (await generateAboutDepth(aboutColorBuf, 1280, 720)).toFile(aboutDepthPath);
  console.log('[OK] Wrote', aboutDepthPath);

  // 3. Profile photo (square avatar from hero or about — keep crisp face crop from close-up)
  const cropSize = Math.round(Math.min(aboutMeta.width, aboutMeta.height) * 0.85);
  await sharp(SRC_ABOUT)
    .extract({
      left: Math.round((aboutMeta.width - cropSize) * 0.35),
      top: Math.round((aboutMeta.height - cropSize) * 0.25),
      width: cropSize,
      height: cropSize,
    })
    .resize(320, 320)
    .webp({ quality: 92 })
    .toFile(PROFILE_OUT);
  console.log('[OK] Wrote', PROFILE_OUT);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
