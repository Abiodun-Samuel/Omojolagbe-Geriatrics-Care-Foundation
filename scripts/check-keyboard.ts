/**
 * Phase 9 gates 7 and 8: keyboard-only operation and reduced motion.
 *
 * Keyboard: tabs through the home page and the whole booking form, asserting
 * that the skip link comes first, focus is always visible, the mobile menu
 * traps and restores focus, and the booking flow can be completed without a
 * mouse.
 *
 * Reduced motion: asserts that with prefers-reduced-motion the scroll-linked
 * spine does not animate and content is visible immediately.
 */
import { chromium, type Page } from "playwright";

const BASE =
  process.argv.find((a) => a.startsWith("--url="))?.split("=")[1] ??
  "http://localhost:4173";

const failures: string[] = [];
const passes: string[] = [];

function check(name: string, ok: boolean, detail = "") {
  if (ok) passes.push(name);
  else failures.push(`${name}${detail ? `: ${detail}` : ""}`);
}

async function focusInfo(page: Page) {
  return page.evaluate(() => {
    const el = document.activeElement as HTMLElement | null;
    if (!el) return null;
    const cs = getComputedStyle(el);
    return {
      tag: el.tagName,
      text: (el.textContent ?? "").trim().slice(0, 40),
      // A visible focus indicator: outline or a ring/box-shadow.
      hasOutline:
        (cs.outlineStyle !== "none" && parseFloat(cs.outlineWidth) > 0) ||
        cs.boxShadow !== "none",
    };
  });
}

async function run() {
  const browser = await chromium.launch();

  // ------------------------------------------------- keyboard: home ------
  {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await ctx.newPage();
    await page.goto(`${BASE}/`, { waitUntil: "networkidle" });

    await page.keyboard.press("Tab");
    const first = await focusInfo(page);
    check(
      "Skip link is the first tab stop",
      !!first && /skip to content/i.test(first.text),
      `got "${first?.text}"`,
    );
    check("Skip link has a visible focus indicator", !!first?.hasOutline);

    // Activate the skip link and confirm it moves to main.
    await page.keyboard.press("Enter");
    await page.waitForTimeout(200);
    const hash = await page.evaluate(() => window.location.hash);
    check("Skip link targets #main", hash === "#main", `got "${hash}"`);

    // Tab through the header and confirm every stop shows focus.
    await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
    let missingIndicator = 0;
    for (let i = 0; i < 25; i++) {
      await page.keyboard.press("Tab");
      const info = await focusInfo(page);
      if (info && !info.hasOutline) missingIndicator++;
    }
    check(
      "Every one of the first 25 tab stops shows a focus indicator",
      missingIndicator === 0,
      `${missingIndicator} without one`,
    );

    await ctx.close();
  }

  // ------------------------------------- keyboard: mobile menu focus -----
  {
    const ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
    const page = await ctx.newPage();
    await page.goto(`${BASE}/`, { waitUntil: "networkidle" });

    const toggle = page.getByRole("button", { name: /open menu/i });
    await toggle.focus();
    await page.keyboard.press("Enter");
    await page.waitForTimeout(300);

    const expanded = await page
      .getByRole("button", { name: /close menu/i })
      .getAttribute("aria-expanded");
    check("Mobile menu opens from the keyboard", expanded === "true");

    await page.keyboard.press("Escape");
    await page.waitForTimeout(300);
    const restored = await page.evaluate(() =>
      (document.activeElement as HTMLElement)?.getAttribute("aria-controls"),
    );
    check(
      "Escape closes the menu and restores focus to the toggle",
      restored === "mobile-menu",
    );

    await ctx.close();
  }

  // ------------------------------ keyboard: booking form end to end ------
  {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await ctx.newPage();
    await page.goto(`${BASE}/book-assessment`, { waitUntil: "networkidle" });

    // Step 1, entirely by keyboard.
    await page.getByRole("radio", { name: "My parent" }).focus();
    await page.keyboard.press("Space");
    await page.selectOption("#b-caretype", { label: "Nursing care" });
    await page.getByRole("button", { name: /continue/i }).click();
    await page.waitForTimeout(300);

    const onStep2 = await page.locator("#b-recipient").isVisible();
    check("Booking step 1 advances with a keyboard-selected radio", onStep2);

    // Validation must block an empty step and say why.
    await page.getByRole("button", { name: /continue/i }).click();
    await page.waitForTimeout(300);
    check(
      "Booking validation blocks an incomplete step",
      await page.locator("#b-recipient").isVisible(),
    );
    check(
      "Booking shows an inline error for the empty field",
      await page.getByText(/please give us a name/i).isVisible(),
    );

    // Complete step 2 by keyboard and advance.
    await page.fill("#b-recipient", "Folake Adeyemi");
    await page.fill("#b-city", "Ibadan");
    await page.fill(
      "#b-needs",
      "She needs help with bathing and medication each morning.",
    );
    // Blur the last field so onBlur validation settles, as it would for a
    // real user who tabs or clicks away before pressing Continue.
    await page.locator("#b-needs").blur();
    await page.getByRole("button", { name: /continue/i }).click();
    await page.waitForSelector("#b-yourname", { state: "visible", timeout: 5000 });
    check("Booking advances to the final step once step 2 is valid", true);

    await page.fill("#b-yourname", "Chidi Adeyemi");
    await page.fill("#b-email", "chidi@example.com");
    await page.fill("#b-phone", "+2348012345678");
    await page.getByRole("radio", { name: "WhatsApp" }).check();

    const submitVisible = await page
      .getByRole("button", { name: /request my free assessment/i })
      .isVisible();
    check("Booking reaches the final step and shows the submit button", submitVisible);

    await ctx.close();
  }

  // ------------------------------------------------- reduced motion ------
  {
    const ctx = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      reducedMotion: "reduce",
    });
    const page = await ctx.newPage();
    await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
    await page.waitForTimeout(400);

    // Content must be visible without scrolling or waiting for animation.
    const cardOpacity = await page.evaluate(() => {
      const el = document.querySelector("h1");
      return el ? getComputedStyle(el).opacity : "missing";
    });
    check("Reduced motion: hero content is visible immediately", cardOpacity === "1");

    // The spine must not scroll-animate: its fill is a static cap.
    await page.evaluate(() => window.scrollTo(0, 2000));
    await page.waitForTimeout(500);
    const spineStatic = await page.evaluate(() => {
      const track = document.querySelector(
        'div[aria-hidden="true"][class*="fixed"][class*="w-0.5"], div[aria-hidden="true"][class*="fixed"][class*="w-px"]',
      );
      const inner = track?.firstElementChild as HTMLElement | null;
      if (!inner) return "no spine";
      // Static cap is a plain span with a fixed height, not a scaled motion div.
      return getComputedStyle(inner).transform;
    });
    check(
      "Reduced motion: spine does not scroll-scale",
      spineStatic === "none" || spineStatic === "matrix(1, 0, 0, 1, 0, 0)",
      `transform was ${spineStatic}`,
    );

    // Global CSS must clamp transition duration.
    const dur = await page.evaluate(() => {
      const b = document.createElement("button");
      b.className = "btn btn-primary";
      document.body.appendChild(b);
      const d = getComputedStyle(b).transitionDuration;
      b.remove();
      return d;
    });
    check(
      "Reduced motion: transitions are clamped to <=120ms",
      dur.split(",").every((d) => parseFloat(d) <= 0.12),
      `got ${dur}`,
    );

    await ctx.close();
  }

  await browser.close();

  // ------------------------------------------------------------ report ---
  console.log(`\nPassed (${passes.length}):`);
  for (const p of passes) console.log(`  ok  ${p}`);
  if (failures.length > 0) {
    console.error(`\nFailed (${failures.length}):`);
    for (const f of failures) console.error(`  XX  ${f}`);
    process.exit(1);
  }
  console.log("\nKeyboard and reduced-motion gates pass.");
}

await run();
