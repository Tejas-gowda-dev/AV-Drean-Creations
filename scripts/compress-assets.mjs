import { readdir, stat, rename, unlink, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import sharp from "sharp";
import ffmpegPath from "ffmpeg-static";

const execFileP = promisify(execFile);
const ASSETS = path.resolve("src/assets");

// Only re-encode files above this size (bytes). Small files are left alone.
const IMAGE_THRESHOLD = 1.2 * 1024 * 1024; // 1.2 MB
const VIDEO_THRESHOLD = 5 * 1024 * 1024; // 5 MB

const MAX_WIDTH = 2200; // plenty for full-screen display on retina
const WEBP_QUALITY = 74;

const mb = (b) => (b / 1024 / 1024).toFixed(2) + " MB";

async function compressImage(file) {
  const full = path.join(ASSETS, file);
  const before = (await stat(full)).size;
  if (before < IMAGE_THRESHOLD) return null;

  const tmp = full + ".tmp";
  const img = sharp(full, { failOn: "none" });
  const meta = await img.metadata();

  await img
    .resize({ width: Math.min(meta.width ?? MAX_WIDTH, MAX_WIDTH), withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY, effort: 5 })
    .toFile(tmp);

  const after = (await stat(tmp)).size;
  if (after < before) {
    await rename(tmp, full);
    return { file, before, after };
  }
  await unlink(tmp); // compression made it bigger, keep original
  return { file, before, after: before, skipped: true };
}

async function compressVideo(file) {
  const full = path.join(ASSETS, file);
  const before = (await stat(full)).size;
  if (before < VIDEO_THRESHOLD) return null;

  const tmp = full.replace(/\.mp4$/i, ".compressed.mp4");
  // 1080p max, H.264 CRF 26, web-optimized (faststart), AAC audio.
  await execFileP(ffmpegPath, [
    "-y", "-i", full,
    "-vf", "scale='min(1920,iw)':-2",
    "-c:v", "libx264", "-preset", "slow", "-crf", "26",
    "-c:a", "aac", "-b:a", "128k",
    "-movflags", "+faststart",
    tmp,
  ]);

  const after = (await stat(tmp)).size;
  if (after < before) {
    await unlink(full);
    await rename(tmp, full);
    return { file, before, after };
  }
  await unlink(tmp);
  return { file, before, after: before, skipped: true };
}

async function main() {
  const files = await readdir(ASSETS);
  const results = [];

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    try {
      if ([".webp", ".jpg", ".jpeg", ".png"].includes(ext)) {
        const r = await compressImage(file);
        if (r) results.push(r);
      } else if (ext === ".mp4") {
        const r = await compressVideo(file);
        if (r) results.push(r);
      }
    } catch (err) {
      console.error(`Failed: ${file} -> ${err.message}`);
    }
  }

  let totalBefore = 0, totalAfter = 0;
  for (const r of results) {
    totalBefore += r.before;
    totalAfter += r.after;
    const tag = r.skipped ? " (kept original)" : "";
    console.log(`${r.file.padEnd(34)} ${mb(r.before).padStart(10)} -> ${mb(r.after).padStart(10)}${tag}`);
  }
  console.log("-".repeat(60));
  console.log(`TOTAL processed: ${mb(totalBefore)} -> ${mb(totalAfter)}`);
}

main();
