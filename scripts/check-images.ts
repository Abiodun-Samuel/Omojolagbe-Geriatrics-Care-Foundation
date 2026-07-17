/**
 * Verifies every image referenced by the media layer actually resolves, and
 * fails the build on a broken link (Phase 6, Phase 9 gate 2).
 *
 * Two kinds of record:
 *   - local  : a repo-relative asset. We check the file exists on disk.
 *   - remote : an http(s) CDN URL. We fetch it and require a 200.
 *
 * The media layer imports assets through Vite's `@/` alias, which node cannot
 * resolve directly, so we parse the import paths out of media.ts and verify
 * those files, plus fetch any absolute URLs found anywhere in src/content.
 */
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

type Failure = { ref: string; reason: string };
const failures: Failure[] = [];
let localChecked = 0;
let remoteChecked = 0;

/** Collect all files under a dir, recursively. */
function walk(dir: string, out: string[] = []): string[] {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

// ---------------------------------------------------------------- local ----
const mediaFile = resolve(root, "src/content/media.ts");
const mediaSrc = readFileSync(mediaFile, "utf-8");

const importRe = /from\s+"@\/(assets\/[^"]+)"/g;
for (const match of mediaSrc.matchAll(importRe)) {
  const rel = match[1];
  const abs = resolve(root, "src", rel);
  localChecked++;
  if (!existsSync(abs)) {
    failures.push({ ref: `@/${rel}`, reason: "local asset not found on disk" });
  }
}

// Public-dir references (e.g. "/media/videos/video1.mp4") in the content layer.
const contentFiles = walk(resolve(root, "src/content"));
const publicRefRe = /"(\/(?:media|favicon|og)\/[^"]+)"/g;
for (const file of contentFiles) {
  const src = readFileSync(file, "utf-8");
  for (const match of src.matchAll(publicRefRe)) {
    const rel = match[1];
    const abs = resolve(root, "public", rel.slice(1));
    localChecked++;
    if (!existsSync(abs)) {
      failures.push({ ref: rel, reason: "public asset not found on disk" });
    }
  }
}

// --------------------------------------------------------------- remote ----
const remoteUrls = new Set<string>();
const urlRe = /"(https?:\/\/[^"]+\.(?:jpg|jpeg|png|webp|avif)(?:\?[^"]*)?)"/g;
for (const file of contentFiles) {
  const src = readFileSync(file, "utf-8");
  for (const match of src.matchAll(urlRe)) remoteUrls.add(match[1]);
}

async function checkRemote(url: string): Promise<void> {
  remoteChecked++;
  try {
    let res = await fetch(url, { method: "HEAD", redirect: "follow" });
    // Some CDNs do not answer HEAD properly; retry with a ranged GET.
    if (!res.ok) {
      res = await fetch(url, {
        method: "GET",
        headers: { Range: "bytes=0-0" },
        redirect: "follow",
      });
    }
    if (!res.ok) {
      failures.push({ ref: url, reason: `HTTP ${res.status}` });
    }
  } catch (err) {
    failures.push({
      ref: url,
      reason: `request failed: ${(err as Error).message}`,
    });
  }
}

await Promise.all([...remoteUrls].map(checkRemote));

// --------------------------------------------------------------- report ----
console.log(
  `Checked ${localChecked} local asset(s) and ${remoteChecked} remote image(s).`,
);

if (failures.length > 0) {
  console.error(`\n${failures.length} broken image reference(s):`);
  for (const f of failures) console.error(`  ${f.ref}\n    -> ${f.reason}`);
  process.exit(1);
}

console.log("All image references resolve.");
