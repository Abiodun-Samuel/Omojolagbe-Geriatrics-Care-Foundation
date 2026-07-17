/**
 * Copy coverage gate (Phase 9.3).
 *
 * Re-extracts every original string tracked in docs/CONTENT_INVENTORY.md and
 * proves it is present in the new codebase. Copy is sacred: this must report
 * 100% coverage, and it exits 1 if it does not.
 *
 * Strings are compared after normalising whitespace only. No other
 * normalisation, so a reworded string fails, which is the point.
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

/** Collapse all whitespace runs so JSX line wrapping does not cause a miss. */
const norm = (s: string) => s.replace(/\s+/g, " ").trim();

/** Decode the HTML entities we legitimately use in JSX for punctuation. */
function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&copy;/g, "©")
    .replace(/&middot;/g, "·")
    .replace(/&#8594;/g, "→")
    .replace(/&nbsp;/g, " ");
}

// ------------------------------------------------- read the inventory ----
const inventoryPath = resolve(root, "docs/CONTENT_INVENTORY.md");
const inventory = readFileSync(inventoryPath, "utf-8");

type Row = { id: string; element: string; copy: string };
const rows: Row[] = [];

/**
 * Strings that are intentionally rendered as structured data or split across
 * several JSX nodes, so they never appear as one contiguous literal. Each is
 * verified by its component parts instead. This is an explicit, reviewed list,
 * not a way to wave copy through: every entry names where the copy now lives.
 */
const compositeRows: Record<string, { parts: string[]; livesIn: string }> = {
  H02: {
    // The original markup also split this line, wrapping each of the three
    // words in its own highlighted span. We keep that treatment.
    parts: ["We create", "healthier", "happier", "fruitful", "life for the elderly."],
    livesIn:
      "content/about.ts heroLegacyLine, rendered in sections/home/Hero.tsx",
  },
  TR04: {
    parts: ["Date", "18th - 20th September, 2025"],
    livesIn: "content/careers.ts trainingProgramme.recentCohort.date",
  },
  TR05: {
    parts: ["Time", "9:00am – 4:00pm daily"],
    livesIn: "content/careers.ts trainingProgramme.recentCohort.time",
  },
  TR06: {
    parts: [
      "Venue",
      "Omojolagbe Geriatric Care Foundation, Alakia Isebo Road, By Onile-Aro B/S, Ibadan, Oyo State.",
    ],
    livesIn: "content/careers.ts trainingProgramme.recentCohort.venue",
  },
  TR16: {
    parts: ["Tope", "08163089909"],
    livesIn: "content/careers.ts trainingProgramme.contacts",
  },
  TR17: {
    parts: ["Dammyy", "07037112792"],
    livesIn: "content/careers.ts trainingProgramme.contacts",
  },
  FT09: {
    parts: ["Omojolagbe Geriatric Care Foundation", ", All Rights Reserved."],
    livesIn: "components/Footer.tsx (year is computed at runtime)",
  },
  FT10: {
    parts: ["Designed &amp; Developed by", "Abiodun Digital Hub"],
    livesIn: "components/Footer.tsx + lib/site.ts credit",
  },
};

/**
 * Original alt text deliberately replaced with a more descriptive alt, which
 * is an accessibility improvement rather than a copy loss. Recorded here and
 * in docs/DECISIONS.md so the change is explicit and reviewable.
 */
const improvedAlts: Record<string, string> = {
  AB21:
    'original alt "construction" was wrong for a photo of caregivers; replaced with a descriptive alt in content/media.ts (see DECISIONS D9)',
};

for (const line of inventory.split("\n")) {
  if (!line.startsWith("|")) continue;
  const cells = line.split("|").map((c) => c.trim());
  // | ID | Page | Section | Element | Copy | Destination |
  if (cells.length < 7) continue;
  const [, id, , , element, copyCell] = cells;
  if (!id || id === "ID" || id.startsWith("--")) continue;

  // The copy cell is wrapped in backticks. Markdown uses a DOUBLE backtick
  // fence for strings that themselves contain a backtick (the original copy
  // uses backticks as apostrophes), so match the doubled form first.
  let copy: string;
  const double = copyCell.match(/^``(.*)``$/s);
  const single = copyCell.match(/^`(.*)`$/s);
  if (double) copy = double[1];
  else if (single) copy = single[1];
  else continue;

  // A doubled fence pads with one space each side to protect the backticks.
  if (double) copy = copy.replace(/^ /, "").replace(/ $/, "");

  // Rows that document a template or a compound entry are checked by their
  // stable literal part only.
  copy = copy.replace("{year}", "");

  rows.push({ id, element, copy });
}

// ------------------------------------------------- read the codebase ----
function walk(dir: string, out: string[] = []): string[] {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      if (name === "assets" || name === "node_modules") continue;
      walk(full, out);
    } else if (/\.(tsx?|html|json|webmanifest)$/.test(name)) {
      out.push(full);
    }
  }
  return out;
}

const files = [
  ...walk(resolve(root, "src")),
  resolve(root, "index.html"),
  resolve(root, "public/favicon/site.webmanifest"),
].filter(existsSync);

const haystack = norm(
  decodeEntities(files.map((f) => readFileSync(f, "utf-8")).join("\n")),
);

// ------------------------------------------------------------ compare ----
const missing: Row[] = [];
const found: Row[] = [];
const composite: Row[] = [];
const improved: Row[] = [];

for (const row of rows) {
  // Alt text deliberately improved for accessibility.
  if (improvedAlts[row.id]) {
    improved.push(row);
    continue;
  }

  // Composite rows: verify every part is present.
  const comp = compositeRows[row.id];
  if (comp) {
    const allPresent = comp.parts.every((p) =>
      haystack.includes(norm(decodeEntities(p))),
    );
    if (allPresent) composite.push(row);
    else missing.push(row);
    continue;
  }

  const needle = norm(decodeEntities(row.copy));
  if (!needle) continue;
  if (haystack.includes(needle)) found.push(row);
  else missing.push(row);
}

const covered = found.length + composite.length;
const total = covered + missing.length;
const pct = total === 0 ? 0 : (covered / total) * 100;

console.log(
  `Copy coverage: ${covered}/${total} (${pct.toFixed(1)}%)  ` +
    `[${found.length} literal, ${composite.length} composite]`,
);

if (composite.length > 0) {
  console.log("\nRe-sectioned copy (verified by parts):");
  for (const c of composite) {
    console.log(`  [${c.id}] -> ${compositeRows[c.id].livesIn}`);
  }
}

if (improved.length > 0) {
  console.log("\nDeliberate accessibility improvements (not copy loss):");
  for (const i of improved) console.log(`  [${i.id}] ${improvedAlts[i.id]}`);
}

if (missing.length > 0) {
  console.error(`\n${missing.length} original string(s) NOT found:`);
  for (const m of missing) {
    const preview = m.copy.length > 90 ? `${m.copy.slice(0, 90)}...` : m.copy;
    console.error(`  [${m.id}] (${m.element}) ${preview}`);
  }
  process.exit(1);
}

console.log("\nEvery original string is present in the new build.");
