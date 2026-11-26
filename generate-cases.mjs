import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECTS_DIR = path.join(__dirname, 'public', 'projects');
const SHOTS_DIR = process.env.SHOTS_DIR || '';

const SOURCES = {
  openstate: {
    s2: 'step_6_shot_1.png',
    s3: 'step_8_shot_1.png',
    v1: 'step_74_shot_1_openstate_v1.png',
    v2: 'step_17_shot_2.png',
  },
  cloudtalk: {
    s2: 'step_22_shot_1.png',
    s3: 'step_22_shot_2.png',
    v1: 'step_22_shot_3.png',
    v2: 'step_22_shot_4.png',
  },
  brainpaintepic: {
    s2: 'step_34_shot_1_shot_test_wheel.png',
    s3: 'step_36_shot_1_brainpaintepic_s3.png',
    v1: 'step_36_shot_3_brainpaintepic_v2.png',
    v2: 'step_46_shot_1_brainpaintepic_v2_final.png',
  },
  efferd: {
    s2: 'step_50_shot_1_efferd_s2.png',
    s3: 'step_50_shot_2_efferd_s3.png',
    v1: 'step_50_shot_3_efferd_v1.png',
    v2: 'step_50_shot_4_efferd_v2.png',
  },
  nura: {
    s2: 'step_58_shot_1_nura_s2.png',
    s3: 'step_58_shot_2_nura_s3.png',
    v1: 'step_72_shot_1_nura_v1.png',
    v2: 'step_58_shot_4_nura_v2.png',
  },
};

async function main() {
  if (!SHOTS_DIR) {
    console.log('Set SHOTS_DIR to regenerate case screenshots from raw captures.');
    return;
  }

  await fs.mkdir(PROJECTS_DIR, { recursive: true });
  for (const [slug, files] of Object.entries(SOURCES)) {
    const pS2 = path.join(SHOTS_DIR, files.s2);
    const pS3 = path.join(SHOTS_DIR, files.s3);
    const pV1 = path.join(SHOTS_DIR, files.v1);
    const pV2 = path.join(SHOTS_DIR, files.v2);

    await sharp(pS2).resize(1920, 1080, { fit: 'cover', position: 'centre' }).webp({ quality: 90 }).toFile(path.join(PROJECTS_DIR, `${slug}-frame.webp`));
    await sharp(pS3).resize(1920, 1080, { fit: 'cover', position: 'centre' }).webp({ quality: 90 }).toFile(path.join(PROJECTS_DIR, `${slug}-section-2.webp`));
    await sharp(pV1).resize(960, 1200, { fit: 'cover', position: 'centre' }).webp({ quality: 90 }).toFile(path.join(PROJECTS_DIR, `${slug}-detail-1.webp`));
    await sharp(pV2).resize(960, 1200, { fit: 'cover', position: 'centre' }).webp({ quality: 90 }).toFile(path.join(PROJECTS_DIR, `${slug}-detail-2.webp`));

    console.log(`[CASE MEDIA] Converted 4 live screenshots for ${slug}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
