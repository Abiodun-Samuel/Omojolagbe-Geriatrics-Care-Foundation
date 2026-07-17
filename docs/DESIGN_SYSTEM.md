# Design System: Omojolagbe Geriatric Care

Fixed inputs: the logo, the yellow, the black. Everything below is derived from those and validated for contrast. All values become CSS custom properties in `@theme` (Tailwind v4, CSS-first). No `tailwind.config.js`.

---

## 0. The one idea

**"The Care Record."** A world-class care brand earns trust by making the invisible visible: who the carer is, what was checked, what happened at each visit. So the whole site is art-directed like a **calm clinical dossier** rather than a brochure. Warm paper, precise ink, one decisive yellow marker, and a **continuous vertical spine** running down the page like the binding of a care file. This is the structural signature (section 3) and the source of the single aesthetic risk (section 6).

---

## 1. Palette

Yellow is a signal. Contrast math forces the discipline the brief asks for: brand yellow on white is 1.10:1 (invisible), on ink 15.48:1 (excellent). **Yellow is fill-and-graphic only, never body text.** It appears at exactly three kinds of moment: (a) the primary CTA, (b) the spine's active/progress marker, (c) one large graphic accent per view (a highlight rule, a stat, a pull-quote bar). Never as a page wash.

### Brand yellow ramp (lemon yellow, from logo `#FFF975` + CSS `#FFF400`)
| Token | Hex | Use |
|-------|-----|-----|
| `--color-brand-50` | `#FFFDF0` | faintest tint, hairline fills |
| `--color-brand-100` | `#FFFAC9` | soft highlight background block |
| `--color-brand-200` | `#FFF59E` | |
| `--color-brand-300` | `#FFF975` | logo yellow, light graphic fill |
| `--color-brand-400` | `#FFF400` | **canonical brand yellow** (primary CTA fill, spine marker) |
| `--color-brand-500` | `#FFD400` | pressed/deeper CTA, denser graphic |
| `--color-brand-600` | `#E0B000` | edges/borders on light where 400 is too light |
| `--color-brand-700` | `#A98400` | |
| `--color-brand-800` | `#8A6D00` | **the only yellow-family value usable as text on white** (4.92:1)  links, inline emphasis |
| `--color-brand-900` | `#5E4A00` | |
| `--color-brand-950` | `#3A2E00` | |

### Ink ramp (warm near-black, from logo `#221D18`)
| Token | Hex | CR on white | Use |
|-------|-----|-------------|-----|
| `--color-ink-950` | `#141210` |  | deepest surfaces, footer |
| `--color-ink-900` | `#1A1712` | 17.87 | **canonical ink**, headings, dark sections |
| `--color-ink-800` | `#2A251E` |  | dark surface elevation |
| `--color-ink-700` | `#4A453C` | 9.51 | **body text** |
| `--color-ink-600` | `#6B6459` | 5.85 | secondary text (AA) |
| `--color-ink-500` | `#78716A` | 4.81 | muted/captions (AA, min size 16px) |
| `--color-ink-400` | `#A8A199` |  | disabled, hairlines |
| `--color-ink-300` | `#CFC9C0` |  | borders |
| `--color-ink-200` | `#E7E2D9` |  | dividers on paper |

### Warm neutral surfaces (paper)
| Token | Hex | Use |
|-------|-----|-----|
| `--color-paper` | `#FAF7F0` | default page background (warm, not stark white) |
| `--color-paper-raised` | `#FFFFFF` | cards on paper |
| `--color-paper-sunken` | `#F2ECE1` | inset panels, form fields |

### Supporting accent (justified in one sentence)
**Evergreen `#1F5E4A`**: the only non-brand hue, reserved exclusively for *verification* affordances (verified-caregiver checks, success states, "reviewed by a nurse"), because trust in care is signalled by a calm medical green and it must never be confused with the yellow CTA. (7.61:1 on white, works inverted too.) Tokens: `--color-verify-500 #1F5E4A`, `--color-verify-600 #164A3A`, `--color-verify-50 #EAF3EF`.

### Semantic feedback
| Token | Hex | |
|-------|-----|--|
| `--color-danger` | `#B4231C` | form errors (4.5:1+ on white/paper) |
| `--color-success` | `#1F5E4A` | = verify (reuse) |
| `--color-focus` | `#8A6D00` | focus ring base, paired with ink offset for visibility on both light and yellow |

### Contrast ledger (computed, all pass AA)
ink-900/white 17.87 · ink-700/white 9.51 (AAA body) · ink-600/white 5.85 · ink-500/white 4.81 · ink-900/brand-400 15.48 · brand-400/ink-900 15.48 · brand-800/white 4.92 (links) · verify/white 7.61 · white/verify 7.61 · white/ink 17.87. Yellow-as-text-on-white is intentionally undefined.

---

## 2. Typography

Not Inter. Not Poppins. The pairing must carry **warmth and authority together**, because the reader is a Nigerian family choosing who cares for their mother.

- **Display:** **Fraunces** (variable serif, optical size + soft/wonky axes). A warm, high-contrast "old-style" serif with humanist softness: authoritative like a broadsheet masthead, warm at large optical sizes. Self-hosted via `@fontsource-variable/fraunces`. Used for h1/h2, pull quotes, big numbers.
- **Body / UI:** **Figtree** (variable humanist sans). Exceptionally legible at small sizes on mid-range Android, friendly but not childish, pairs cleanly under Fraunces. Self-hosted via `@fontsource-variable/figtree`. Used for body, UI, labels, nav.
- **Numeric:** Figtree tabular figures for stats/pricing (`font-feature-settings: "tnum"`).

Loading: self-host variable fonts, `font-display: swap`, preload the two woff2 files actually used above the fold (Fraunces display + Figtree regular). No FOIT.

### Fluid type scale (`clamp()`, in `@theme`)
| Token | clamp | Role | Tracking / leading |
|-------|-------|------|--------------------|
| `--text-hero` | `clamp(2.75rem, 1.6rem + 5.6vw, 6rem)` | home h1 | tracking `-0.02em`, leading `0.95` |
| `--text-h1` | `clamp(2.25rem, 1.5rem + 3.4vw, 4rem)` | page h1 | `-0.015em`, `1.02` |
| `--text-h2` | `clamp(1.75rem, 1.3rem + 2vw, 2.75rem)` | section | `-0.01em`, `1.08` |
| `--text-h3` | `clamp(1.35rem, 1.15rem + 0.9vw, 1.85rem)` | subsection | `-0.005em`, `1.15` |
| `--text-lead` | `clamp(1.125rem, 1.05rem + 0.4vw, 1.375rem)` | intro paragraphs | `0`, `1.55` |
| `--text-body` | `clamp(1rem, 0.97rem + 0.15vw, 1.0625rem)` | body | `0`, `1.65` |
| `--text-sm` | `0.875rem` | captions, labels | `0.01em`, `1.5` |
| `--text-eyebrow` | `0.8125rem` | eyebrows | `0.14em` uppercase, `1` |

Measure capped at `--measure: 68ch` for body, `38ch` for lead.

---

## 3. Layout, grid, and the structural signature

### Grid & container
- 12-column grid, gutter `clamp(1rem, 2vw, 2rem)`.
- Containers: `--container-prose 720px`, `--container-content 1120px`, `--container-wide 1320px`, full-bleed allowed for dark bands and the coverage map.
- Section rhythm: vertical padding `clamp(4rem, 8vw, 8rem)`; tighter `clamp(3rem, 5vw, 5rem)` for dense utility sections.

### Radius scale
`--radius-xs 4px` · `--radius-sm 8px` · `--radius-card 16px` · `--radius-lg 24px` · `--radius-pill 999px`. Cards default to `--radius-card`. (The current site's `rounded-pill` everything is dropped; pills are reserved for the WhatsApp chip and filter toggles.)

### Elevation
Two shadows only, both warm-tinted (never blue-grey):
- `--shadow-card: 0 1px 2px rgba(26,23,18,.04), 0 8px 24px -12px rgba(26,23,18,.12)`
- `--shadow-pop: 0 2px 4px rgba(26,23,18,.06), 0 24px 48px -20px rgba(26,23,18,.20)` (dialogs, floating WhatsApp)

### Border language
Hairline `1px` `--color-ink-200` on paper; on dark surfaces `1px rgba(255,255,255,.10)`. The dossier feel comes from precise thin rules, not heavy boxes.

### The structural signature: "the care spine"
A **continuous vertical rule** pinned to the left of the content column (desktop) / hugging the left edge (mobile), threading the entire page like the binding of a care record. It is:
- **Neutral ink hairline** by default (`--color-ink-200`).
- **Filled with brand yellow from the top down to the scroll position**: a scroll-linked progress spine. This is the one place yellow gets to be a line, and it earns it: it is literally the reader's progress through the care story.
- **Punctuated by section nodes:** small square markers (echoing the logo's non-round care motif) that snap to yellow as their section enters view. On "How it works" the nodes carry the step numbers, so the same spine that shows progress also renders the one genuinely-sequential section.
- Executed **everywhere** (home + all pages via the shared layout), so the site is remembered by it. Competing ideas (timeline threads, magnetic everything) are cut.
- Reduced-motion and mobile-narrow fallback: static hairline with static yellow nodes, no scroll-fill.

---

## 4. Motion language

Motion serves comprehension and warmth; it never blocks reading and never fires twice on the same element (`whileInView` + `once:true`).

- **Durations:** `--dur-fast 140ms` (hover/focus), `--dur-base 320ms` (reveals), `--dur-slow 560ms` (hero orchestration).
- **Easing:** `--ease-brand: cubic-bezier(0.22, 1, 0.36, 1)` (confident ease-out) for entrances; `--ease-inout: cubic-bezier(0.65, 0, 0.35, 1)` for state changes.
- **Stagger:** `--stagger 70ms` between siblings; cap a group at ~6 steps so it never feels slow.
- **Entrance pattern:** opacity 0→1 + translateY 12px→0, `--ease-brand`, triggered at `margin:"-10% 0px"`.
- **Hero:** one orchestrated load sequence: eyebrow, then h1 lines masked-reveal upward, then subhead, then CTAs, then the spine draws down. Text is readable before motion completes (content is in the DOM; animation is transform/opacity only).
- **Signature moment:** the spine's yellow fill tracking scroll + section nodes snapping to yellow. One moment, precise.
- **Micro-interactions:** buttons/cards lift `translateY(-2px)` + shadow swap on hover; links get an animated yellow underline (`--color-brand-500`) grown from left. Focus states are **visible and designed** (2px `--color-focus` ring + 2px paper offset), not an afterthought.
- **`prefers-reduced-motion: reduce`:** everything collapses to a ≤120ms opacity fade; spine becomes static; no transforms, no scroll-linked fill. Tested as a gate.

---

## 5. Component primitives (the small, documented `@apply` set)
Only these primitives may use `@apply`; everything else composes utilities:
`btn` (+`btn-primary` yellow/ink, `btn-ghost`, `btn-on-dark`), `chip`, `card`, `field` (input/textarea/select), `eyebrow`, `rule` (the spine), `tag-verify`. Documented in `HANDOVER.md`.

---

## 6. The one aesthetic risk (and the accessory removed)

**Risk:** the scroll-linked yellow **care spine** as a persistent, page-threading structural element. One sentence: it turns the brand's core promise: making care visible and accountable: into the literal armature you read the site along, which no competitor does and which could feel gimmicky if mishandled, so it is executed as a quiet hairline that only fills with yellow.

**Accessory removed before shipping:** the tempting **magnetic primary CTA** (cursor-attraction on the "Book a free assessment" button). It is cut. It competes with the spine for "the clever moment," adds pointer-only motion that does nothing for the mid-range-Android majority, and the brief says remove one accessory. Gone.

---

## 7. Critique against the brief (self-review before build)

- *"A page painted yellow is not classy"*: enforced structurally: yellow has no light-surface text token and appears only at CTA + spine + one accent. Passed.
- *"Not Inter, not Poppins, warmth + authority"*: Fraunces × Figtree, both variable, self-hosted. Passed.
- *"One structural signature, executed everywhere, competing ideas cut"*: the care spine; timeline/magnetic-CTA explicitly cut. Passed.
- *"Would this read as generic care?"*: a generic care site uses a stock smiling-nurse hero, a teal palette, and rounded-pill buttons. We reject all three: real Nigerian photography, a warm-paper/ink/lemon system, squared dossier markers, and a type-led hero. Revised away from generic. Passed.
- *Dark mode decision (one line):* **No global dark mode.** The brand is warm paper + ink + one yellow; a dark theme would either mute the paper warmth or over-expose the yellow (which glows on dark and would break the "restraint" rule). Instead we use **intentional dark bands** (hero accents, footer, "why families choose us") as punctuation. Consistent, on-brand, and it keeps the single decisive yellow from becoming a neon field.
