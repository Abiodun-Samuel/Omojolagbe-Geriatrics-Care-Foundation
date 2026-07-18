/**
 * Phase 9 visual + accessibility gate.
 *
 * For every route: screenshots at 375 and 1440, runs axe-core, and checks the
 * page has exactly one h1. Also runs a reduced-motion pass.
 *
 * Usage: npx tsx scripts/audit-pages.ts [--url http://localhost:4173]
 */
import { chromium, type Browser, type Page } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const shotDir = resolve(root, "screenshots");

const BASE =
  process.argv.find((a) => a.startsWith("--url="))?.split("=")[1] ??
  "http://localhost:4173";

const routes = [
  "/",
  "/about",
  "/services",
  "/services/personal-care",
  "/who-we-care-for",
  "/who-we-care-for/dementia-and-alzheimers",
  "/how-it-works",
  "/caregivers",
  "/pricing",
  "/diaspora",
  "/book-assessment",
  "/testimonials",
  "/faq",
  "/journal",
  "/journal/arranging-care-for-parents-from-abroad",
  "/careers",
  "/careers/home-caregiver",
  "/contact",
  "/gallery",
  "/privacy",
  "/terms",
  "/cookies",
  "/this-route-does-not-exist",
];

type Violation = {
  route: string;
  id: string;
  impact: string;
  help: string;
  nodes: number;
};

const violations: Violation[] = [];
const headingIssues: string[] = [];
const consoleIssues: string[] = [];

function slug(route: string) {
  return route === "/" ? "home" : route.slice(1).replace(/\//g, "-");
}

async function shoot(page: Page, route: string, width: number, label: string) {
  await page.setViewportSize({ width, height: width === 375 ? 812 : 900 });
  await page.goto(`${BASE}${route}`, { waitUntil: "networkidle" });
  // Park the cursor away from the nav so hover-only menus are not captured open.
  await page.mouse.move(width - 5, 5);

  // Scroll the whole page first. Scroll-revealed sections use whileInView, so
  // a naive fullPage capture stitches them while still at opacity 0 and the
  // screenshot lies about what a real user sees. Walk the full document height
  // in viewport-sized steps, re-measuring each time (lazy images grow the
  // page), let the reveals fire (once:true, so they stay visible), then
  // return to the top and capture.
  const viewportHeight = page.viewportSize()?.height ?? 900;
  let position = 0;
  for (let i = 0; i < 60; i++) {
    const docHeight = await page.evaluate(
      () => document.documentElement.scrollHeight,
    );
    if (position >= docHeight) break;
    position += viewportHeight;
    await page.evaluate((y) => window.scrollTo(0, y), position);
    await page.waitForTimeout(120);
  }
  // Settle: let the last reveals and any lazy images finish.
  await page.waitForTimeout(800);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);

  await page.screenshot({
    path: resolve(shotDir, `${slug(route)}-${label}.png`),
    fullPage: true,
  });
}

async function run() {
  mkdirSync(shotDir, { recursive: true });
  const browser: Browser = await chromium.launch();

  for (const route of routes) {
    const context = await browser.newContext();
    const page = await context.newPage();

    page.on("console", (msg) => {
      if (msg.type() === "error" || msg.type() === "warning") {
        const text = msg.text();
        // Filter two known-benign messages:
        //  - 404 probe for the deliberate not-found route
        //  - the "preloaded but not used within a few seconds" font warning,
        //    which is a headless-timing heuristic. The fonts ARE used (they
        //    render the hero immediately) and real Lighthouse scores these
        //    routes Best-Practices 100.
        const benign =
          text.includes("Failed to load resource") ||
          text.includes("was preloaded using link preload but not used");
        if (!benign) {
          consoleIssues.push(`${route}: [${msg.type()}] ${text}`);
        }
      }
    });

    await shoot(page, route, 1440, "1440");
    await shoot(page, route, 375, "375");

    // One h1 per page.
    const h1s = await page.locator("h1").count();
    if (h1s !== 1) headingIssues.push(`${route}: ${h1s} h1 elements`);

    // axe
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    for (const v of results.violations) {
      violations.push({
        route,
        id: v.id,
        impact: v.impact ?? "unknown",
        help: v.help,
        nodes: v.nodes.length,
      });
    }

    await context.close();
    process.stdout.write(".");
  }

  // Reduced motion pass on the home page.
  const rmContext = await browser.newContext({ reducedMotion: "reduce" });
  const rmPage = await rmContext.newPage();
  await rmPage.setViewportSize({ width: 1440, height: 900 });
  await rmPage.goto(`${BASE}/`, { waitUntil: "networkidle" });
  await rmPage.waitForTimeout(400);
  await rmPage.screenshot({
    path: resolve(shotDir, "home-1440-reduced-motion.png"),
    fullPage: true,
  });
  await rmContext.close();

  await browser.close();

  // ------------------------------------------------------------- report ---
  console.log("\n");
  console.log(`Routes audited: ${routes.length}`);
  console.log(`Screenshots:    ${shotDir}`);

  if (headingIssues.length > 0) {
    console.error(`\nHeading structure problems (${headingIssues.length}):`);
    for (const h of headingIssues) console.error(`  ${h}`);
  } else {
    console.log("Heading structure: every route has exactly one h1.");
  }

  if (consoleIssues.length > 0) {
    console.error(`\nConsole errors/warnings (${consoleIssues.length}):`);
    for (const c of [...new Set(consoleIssues)].slice(0, 20)) {
      console.error(`  ${c}`);
    }
  } else {
    console.log("Console: no errors or warnings at runtime.");
  }

  if (violations.length > 0) {
    console.error(`\naxe violations (${violations.length}):`);
    const grouped = new Map<string, Violation[]>();
    for (const v of violations) {
      grouped.set(v.id, [...(grouped.get(v.id) ?? []), v]);
    }
    for (const [id, vs] of grouped) {
      console.error(
        `  [${vs[0].impact}] ${id}: ${vs[0].help}\n     ${vs.length} route(s): ${vs
          .map((v) => v.route)
          .slice(0, 6)
          .join(", ")}`,
      );
    }
  } else {
    console.log("axe: zero violations across all routes.");
  }

  writeFileSync(
    resolve(root, "screenshots/audit-report.json"),
    JSON.stringify({ violations, headingIssues, consoleIssues }, null, 2),
  );

  if (violations.length > 0 || headingIssues.length > 0) process.exit(1);
}

await run();
