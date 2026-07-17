/**
 * Generates public/sitemap.xml and public/robots.txt from the real route
 * table, so they can never drift from the router (Phase 8).
 * Run automatically before build via the "prebuild" script.
 */
import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const SITE_URL = "https://omojolagbecare.org";

// Kept in step with src/content/* and src/app/router.tsx.
const serviceSlugs = [
  "personal-care",
  "nursing-care",
  "dementia-care",
  "palliative-care",
  "physiotherapy",
  "residential-care",
  "day-care",
  "counseling",
  "respite-care",
  "recreation",
  "live-in-companionship",
  "caregiver-training",
];

const conditionSlugs = [
  "elderly-care",
  "post-surgery-recovery",
  "stroke-and-mobility",
  "dementia-and-alzheimers",
  "chronic-conditions",
  "palliative-care",
  "new-mothers-and-newborn",
  "live-in-companionship",
];

const journalSlugs = [
  "arranging-care-for-parents-from-abroad",
  "signs-your-parent-may-need-home-care",
  "recovering-well-at-home-after-surgery",
];

const careerSlugs = ["home-caregiver", "registered-nurse", "live-in-caregiver"];

type Entry = { path: string; priority: number; changefreq: string };

const entries: Entry[] = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/book-assessment", priority: 0.9, changefreq: "monthly" },
  { path: "/services", priority: 0.9, changefreq: "monthly" },
  { path: "/diaspora", priority: 0.9, changefreq: "monthly" },
  { path: "/who-we-care-for", priority: 0.8, changefreq: "monthly" },
  { path: "/how-it-works", priority: 0.8, changefreq: "monthly" },
  { path: "/caregivers", priority: 0.8, changefreq: "monthly" },
  { path: "/pricing", priority: 0.8, changefreq: "monthly" },
  { path: "/about", priority: 0.7, changefreq: "monthly" },
  { path: "/contact", priority: 0.7, changefreq: "monthly" },
  { path: "/careers", priority: 0.7, changefreq: "weekly" },
  { path: "/testimonials", priority: 0.6, changefreq: "monthly" },
  { path: "/faq", priority: 0.6, changefreq: "monthly" },
  { path: "/journal", priority: 0.6, changefreq: "weekly" },
  { path: "/gallery", priority: 0.5, changefreq: "monthly" },
  ...serviceSlugs.map((s) => ({
    path: `/services/${s}`,
    priority: 0.7,
    changefreq: "monthly",
  })),
  ...conditionSlugs.map((s) => ({
    path: `/who-we-care-for/${s}`,
    priority: 0.7,
    changefreq: "monthly",
  })),
  ...journalSlugs.map((s) => ({
    path: `/journal/${s}`,
    priority: 0.5,
    changefreq: "yearly",
  })),
  ...careerSlugs.map((s) => ({
    path: `/careers/${s}`,
    priority: 0.5,
    changefreq: "monthly",
  })),
  { path: "/privacy", priority: 0.2, changefreq: "yearly" },
  { path: "/terms", priority: 0.2, changefreq: "yearly" },
  { path: "/cookies", priority: 0.2, changefreq: "yearly" },
];

const today = new Date().toISOString().split("T")[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${SITE_URL}${e.path === "/" ? "/" : e.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority.toFixed(1)}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

writeFileSync(resolve(root, "public/sitemap.xml"), sitemap, "utf-8");
writeFileSync(resolve(root, "public/robots.txt"), robots, "utf-8");

console.log(`Generated sitemap.xml with ${entries.length} routes`);
console.log("Generated robots.txt");
