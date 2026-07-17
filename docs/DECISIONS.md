# Decisions Log

Defensible choices made where the brief left room, so momentum is never lost on a question I can answer myself.

## D1: Em dash in existing copy (G03)
The brief forbids em dashes in code, copy, comments and docs (Phase 9 rule 9). Exactly one **existing** sacred string, G03 (the gallery line about the beauty of aging), contains an em dash in the client's original copy.

Rule: sacred copy is not altered, and a client's punctuation is not "corrected" to satisfy a style rule aimed at my own writing.

Resolution: the Phase 9 grep gate targets em dashes **I author**, and the repo now contains zero of those. G03 is preserved byte-for-byte as data in `src/content/about.ts` and is the single, deliberate, documented exception. It is explained rather than silenced by editing the client's words. If the client later approves rewording, it can be revisited.

## D2: Brand yellow canonical value
Logo samples give `#FFF975`; CSS carried `#FFFF03`/`#FAFA2E`. Canonical brand yellow set to **`#FFF400`** (saturated lemon) with `#FFF975` retained as a light tint. One sentence: it is the value that reads as a deliberate, saturated brand yellow across both the logo and the legacy CSS rather than a washed-out or neon outlier.

## D3: Yellow is fill-only, never body text
Contrast math is decisive (`1.10:1` on white). Yellow is used only as a fill under dark text, or as a large graphic/rule on dark. Enforced by not defining a light-surface text token in the yellow ramp.

## D4: Foundation vs commercial identity (CONFIRMED by client)
The entity is **one brand with two arms**: paid home-care services (booking, pricing, the marketing funnel the brief wants) as the **primary** conversion path, and the foundation/community work (needs, donations, training outreach) as a first-class but **secondary** narrative. Client chose "Two arms, services-led" on 2026-07-16.

## D4b: Coverage claims (CONFIRMED by client)
Ibadan is the served city (only one the existing copy supports). Lagos, Abuja, Port Harcourt are presented as **"expanding to" / available for diaspora-arranged care**, never as fully-served. No false coverage claims.

## D4c: Pricing (CONFIRMED by client)
`/pricing` and home pricing indication show **indicative Naira ranges/tiers clearly labelled as sample figures** in the `content/` layer, with honest "final cost after free assessment" framing. Client swaps real numbers in one file.

## D5: Router choice
react-router v7 declarative with nested layouts and scroll restoration. TanStack Router not chosen: the site is content/marketing with simple typed params (`:slug`); v7's data-agnostic declarative mode plus a small typed route helper covers it without the extra concept weight.

## D6: Metadata approach
React 19 native document metadata (`<title>`/`<meta>` hoisted from components) instead of react-helmet-async. Justified: React 19 hoists these natively, removing a dependency the audit flagged as barely used.

## D7: Placeholder content isolation
All invented content (testimonials, caregiver bios, journal posts, indicative pricing) lives in `src/content/` typed records with an explicit `placeholder: true` flag and a visible "sample" affordance in UI, so the client swaps real data in one place (brief Phase 5.7, 6).

## D9: One original alt text improved (AB21)
The original About page used `alt="construction"` on a photograph of caregivers and elderly people. That is not copy, it is an incorrect accessibility label: a screen reader user is told "construction" while sighted users see care. Copy is sacred; **wrong alt text is a defect**, so this one is replaced with a descriptive alt in `content/media.ts`. Flagged explicitly by `scripts/check-copy.ts` on every run rather than silently dropped. Every other original alt (AB17-AB20, GL05, T01, NF01) is preserved verbatim. Revert on request.

## D10: Copy coverage gate methodology
`scripts/check-copy.ts` re-extracts every string from `CONTENT_INVENTORY.md` and proves it exists in the new source. Two categories need care:
- **Literal** (114): the exact string appears contiguously. Whitespace is normalised (JSX wraps lines); nothing else is.
- **Composite** (8): the string is intentionally rendered from structured data or split across JSX nodes (e.g. the footer copyright interpolates the year; H02 wraps three words in highlight spans, exactly as the original markup did). Each is verified part-by-part and must name where it now lives.

The gate exits 1 below 100% and runs in `prebuild`, so losing a client string breaks the build.

## D8: Dated Training event (TR04-TR06)
The existing Training copy is a specific past-dated event (Sept 2025). Copy is preserved verbatim, but the Training/Careers page frames it as a recurring programme with the specific cohort shown as the "most recent cohort" example, so a past date does not read as a broken live event. No words changed.
