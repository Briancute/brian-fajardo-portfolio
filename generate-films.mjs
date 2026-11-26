import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import sharp from 'sharp';
import ffmpegPath from 'ffmpeg-static';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, 'public/wp-content/themes/piven/dist');
const HERO_PHOTO = path.join(DIST, 'scenes/hero/photo.webp');
const ABOUT_PHOTO = path.join(DIST, 'scenes/about/photo.webp');
const OUT_IN = path.join(DIST, 'film/hero-about.mp4');
const OUT_OUT = path.join(DIST, 'film/about-hero.mp4');

const W = 1920;
const H = 1080;
const FPS = 30;
const TOTAL_FRAMES = 60; // 2.00s at 30fps matching original choreography

const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);
const smoothstep = (e0, e1, x) => {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
};
const easeInOutCubic = (p) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);
const easeOutCubic = (p) => 1 - Math.pow(1 - p, 3);

function sampleBilinearClamped(src, x, y, out, outIdx) {
  const cx = clamp(x, 0, W - 1.001);
  const cy = clamp(y, 0, H - 1.001);
  const x0 = cx | 0;
  const y0 = cy | 0;
  const x1 = x0 + 1 < W ? x0 + 1 : x0;
  const y1 = y0 + 1 < H ? y0 + 1 : y0;
  const fx = cx - x0;
  const fy = cy - y0;
  const w00 = (1 - fx) * (1 - fy);
  const w10 = fx * (1 - fy);
  const w01 = (1 - fx) * fy;
  const w11 = fx * fy;

  const i00 = (y0 * W + x0) * 3;
  const i10 = (y0 * W + x1) * 3;
  const i01 = (y1 * W + x0) * 3;
  const i11 = (y1 * W + x1) * 3;

  out[outIdx] = src[i00] * w00 + src[i10] * w10 + src[i01] * w01 + src[i11] * w11;
  out[outIdx + 1] = src[i00 + 1] * w00 + src[i10 + 1] * w10 + src[i01 + 1] * w01 + src[i11 + 1] * w11;
  out[outIdx + 2] = src[i00 + 2] * w00 + src[i10 + 2] * w10 + src[i01 + 2] * w01 + src[i11 + 2] * w11;
}

function sampleFeatheredAbout(src, x, y, out, outIdx) {
  // Fade smoothly to dark studio shadow (#050505) near/beyond image edges to avoid clamping streaks
  const pad = 110;
  const ax = smoothstep(0, pad, x) * smoothstep(W - 1, W - 1 - pad, x);
  const ay = smoothstep(0, pad * 0.6, y) * smoothstep(H - 1, H - 1 - pad * 0.6, y);
  const alpha = ax * ay;
  if (alpha <= 0.002) {
    out[outIdx] = 5;
    out[outIdx + 1] = 5;
    out[outIdx + 2] = 5;
    return;
  }
  sampleBilinearClamped(src, x, y, out, outIdx);
  if (alpha < 0.998) {
    out[outIdx] = 5 + (out[outIdx] - 5) * alpha;
    out[outIdx + 1] = 5 + (out[outIdx + 1] - 5) * alpha;
    out[outIdx + 2] = 5 + (out[outIdx + 2] - 5) * alpha;
  }
}

function renderFrame(p, heroSharp, heroSoft, aboutSharp, aboutSoft) {
  // Exact 1:1 glasses bridge registration:
  // Hero (1920x1080): (956, 476), glasses width ~134px
  // About (1920x1080): (932, 428), glasses width ~475px -> S = 3.55
  const hx0 = 956;
  const hy0 = 476;
  const bx0 = 932;
  const by0 = 428;
  const S = 3.55;
  const zHeroEnd = 3.42;

  let zHero, zAbout, ax, ay, mix, desat, softAmt;

  if (p <= 0.72) {
    const tZoom = clamp(p / 0.72, 0, 1);
    const e = easeInOutCubic(tZoom);
    zHero = Math.pow(zHeroEnd, e);
    zAbout = zHero / S;
    ax = hx0 + (bx0 - hx0) * e;
    ay = hy0 + (by0 - hy0) * e;
    desat = smoothstep(0.18, 0.68, e);
    mix = smoothstep(0.32, 0.82, e);
    softAmt = 0.42 * Math.sin(Math.PI * e);
  } else {
    // Close-up face catch & subtle 4% push-in settle onto full 1:1 About portrait
    const tHold = clamp((p - 0.72) / 0.28, 0, 1);
    const eh = easeOutCubic(tHold);
    const zAboutStart = zHeroEnd / S;
    zAbout = zAboutStart + (1.0 - zAboutStart) * eh;
    zHero = zAbout * S;
    ax = bx0;
    ay = by0;
    desat = 1.0;
    mix = 1.0;
    softAmt = 0.0;
  }

  const frame = Buffer.allocUnsafe(W * H * 3);
  const hTmp = [0, 0, 0];
  const hsTmp = [0, 0, 0];
  const aTmp = [0, 0, 0];
  const asTmp = [0, 0, 0];

  const invHero = 1 / zHero;
  const invAbout = 1 / zAbout;

  for (let y = 0; y < H; y++) {
    const dy = y - ay;
    const hy = hy0 + dy * invHero;
    const by = by0 + dy * invAbout;

    for (let x = 0; x < W; x++) {
      const dx = x - ax;
      const hx = hx0 + dx * invHero;
      const bx = bx0 + dx * invAbout;
      const outIdx = (y * W + x) * 3;

      if (mix < 0.999) {
        sampleBilinearClamped(heroSharp, hx, hy, hTmp, 0);
        if (softAmt > 0.01) {
          sampleBilinearClamped(heroSoft, hx, hy, hsTmp, 0);
          hTmp[0] = hTmp[0] * (1 - softAmt) + hsTmp[0] * softAmt;
          hTmp[1] = hTmp[1] * (1 - softAmt) + hsTmp[1] * softAmt;
          hTmp[2] = hTmp[2] * (1 - softAmt) + hsTmp[2] * softAmt;
        }
        if (desat > 0.005) {
          const lum = 0.2126 * hTmp[0] + 0.7152 * hTmp[1] + 0.0722 * hTmp[2];
          hTmp[0] = hTmp[0] * (1 - desat) + lum * desat;
          hTmp[1] = hTmp[1] * (1 - desat) + lum * desat;
          hTmp[2] = hTmp[2] * (1 - desat) + lum * desat;
        }
      }

      if (mix > 0.001) {
        sampleFeatheredAbout(aboutSharp, bx, by, aTmp, 0);
        if (softAmt > 0.01) {
          sampleFeatheredAbout(aboutSoft, bx, by, asTmp, 0);
          aTmp[0] = aTmp[0] * (1 - softAmt) + asTmp[0] * softAmt;
          aTmp[1] = aTmp[1] * (1 - softAmt) + asTmp[1] * softAmt;
          aTmp[2] = aTmp[2] * (1 - softAmt) + asTmp[2] * softAmt;
        }
      }

      if (mix <= 0.001) {
        frame[outIdx] = hTmp[0];
        frame[outIdx + 1] = hTmp[1];
        frame[outIdx + 2] = hTmp[2];
      } else if (mix >= 0.999) {
        frame[outIdx] = aTmp[0];
        frame[outIdx + 1] = aTmp[1];
        frame[outIdx + 2] = aTmp[2];
      } else {
        frame[outIdx] = hTmp[0] * (1 - mix) + aTmp[0] * mix;
        frame[outIdx + 1] = hTmp[1] * (1 - mix) + aTmp[1] * mix;
        frame[outIdx + 2] = hTmp[2] * (1 - mix) + aTmp[2] * mix;
      }
    }
  }

  return frame;
}

async function encodeMp4(frames, outPath) {
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  return new Promise((resolve, reject) => {
    const proc = spawn(
      ffmpegPath,
      [
        '-y',
        '-f',
        'rawvideo',
        '-pix_fmt',
        'rgb24',
        '-s',
        `${W}x${H}`,
        '-r',
        String(FPS),
        '-i',
        'pipe:0',
        '-c:v',
        'libx264',
        '-pix_fmt',
        'yuv420p',
        '-preset',
        'medium',
        '-crf',
        '18',
        '-g',
        '15',
        '-movflags',
        '+faststart',
        outPath,
      ],
      { stdio: ['pipe', 'inherit', 'pipe'] }
    );

    let stderr = '';
    proc.stderr.on('data', (chunk) => {
      stderr += chunk.toString();
    });
    proc.on('error', reject);
    proc.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`ffmpeg exited with code ${code}: ${stderr}`));
    });

    (async () => {
      for (const buf of frames) {
        if (!proc.stdin.write(buf)) {
          await new Promise((r) => proc.stdin.once('drain', r));
        }
      }
      proc.stdin.end();
    })().catch(reject);
  });
}

async function main() {
  if (!ffmpegPath) throw new Error('ffmpeg-static binary not found');
  console.log('Loading source frames...');
  const [heroSharp, heroSoft, aboutSharp, aboutSoft] = await Promise.all([
    sharp(HERO_PHOTO).resize(W, H).removeAlpha().raw().toBuffer(),
    sharp(HERO_PHOTO).resize(W, H).blur(6).removeAlpha().raw().toBuffer(),
    sharp(ABOUT_PHOTO).resize(W, H).removeAlpha().raw().toBuffer(),
    sharp(ABOUT_PHOTO).resize(W, H).blur(6).removeAlpha().raw().toBuffer(),
  ]);

  console.log(`Rendering ${TOTAL_FRAMES} transition frames (${W}x${H}, 2.00s)...`);
  const frames = [];
  for (let i = 0; i < TOTAL_FRAMES; i++) {
    const p = i / (TOTAL_FRAMES - 1);
    frames.push(renderFrame(p, heroSharp, heroSoft, aboutSharp, aboutSoft));
  }

  console.log('Encoding hero-about.mp4...');
  await encodeMp4(frames, OUT_IN);
  console.log('Encoding about-hero.mp4...');
  await encodeMp4([...frames].reverse(), OUT_OUT);

  const [s1, s2] = await Promise.all([fs.stat(OUT_IN), fs.stat(OUT_OUT)]);
  console.log(`[OK] hero-about.mp4 (${s1.size} bytes)`);
  console.log(`[OK] about-hero.mp4 (${s2.size} bytes)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
