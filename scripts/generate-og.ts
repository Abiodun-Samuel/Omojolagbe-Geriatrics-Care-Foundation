/**
 * Generates the Open Graph social image (1200x630) from the brand tokens, so
 * the share card is on-brand and never drifts from the palette (Phase 8).
 *
 * Written as an SVG and rasterised with sharp if available; the SVG itself is
 * always written so there is a source of truth in the repo.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const outDir = resolve(root, "public/og");
mkdirSync(outDir, { recursive: true });

// Brand tokens (kept in step with src/styles/index.css @theme).
const INK = "#1a1712";
const BRAND = "#fff400";
const PAPER = "#faf7f0";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${INK}"/>

  <!-- the care spine: the structural signature, as the share card's armature -->
  <rect x="72" y="0" width="4" height="630" fill="rgba(255,255,255,0.10)"/>
  <rect x="72" y="0" width="4" height="330" fill="${BRAND}"/>
  <rect x="64" y="322" width="20" height="20" fill="${BRAND}"/>

  <text x="140" y="150" font-family="Figtree, Helvetica, Arial, sans-serif"
        font-size="22" font-weight="600" letter-spacing="3.2" fill="${BRAND}">
    OMOJOLAGBE GERIATRIC CARE
  </text>

  <text x="140" y="272" font-family="Fraunces, Georgia, serif"
        font-size="64" font-weight="600" fill="${PAPER}">
    Care your parents can feel,
  </text>
  <text x="140" y="350" font-family="Fraunces, Georgia, serif"
        font-size="64" font-weight="600" fill="${PAPER}">
    that you can see.
  </text>

  <text x="140" y="440" font-family="Figtree, Helvetica, Arial, sans-serif"
        font-size="28" fill="rgba(250,247,240,0.72)">
    Vetted caregivers and licensed nurses in Ibadan.
  </text>
  <text x="140" y="482" font-family="Figtree, Helvetica, Arial, sans-serif"
        font-size="28" fill="rgba(250,247,240,0.72)">
    Arranged from home or from abroad.
  </text>

  <rect x="140" y="530" width="360" height="60" rx="30" fill="${BRAND}"/>
  <text x="320" y="569" text-anchor="middle"
        font-family="Figtree, Helvetica, Arial, sans-serif"
        font-size="24" font-weight="700" fill="${INK}">
    Book a free care assessment
  </text>
</svg>
`;

writeFileSync(resolve(outDir, "omojolagbe-og.svg"), svg, "utf-8");
console.log("Wrote public/og/omojolagbe-og.svg");

// Rasterise to PNG if sharp is installed (optional dependency).
try {
  const { default: sharp } = await import("sharp");
  await sharp(Buffer.from(svg)).png().toFile(resolve(outDir, "omojolagbe-og.png"));
  console.log("Wrote public/og/omojolagbe-og.png");
} catch {
  console.warn(
    "sharp not installed: PNG not generated. The SVG is written; run `npm i -D sharp` and re-run to produce the PNG.",
  );
}
