export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date */
  date: string;
  readingMinutes: number;
  category: string;
  /** simple typed body: array of paragraphs and headings, no CMS */
  body: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "ul"; items: string[] }
  >;
  placeholder: true;
};

/**
 * PLACEHOLDER journal / family guides (docs/DECISIONS.md D7). Typed local
 * content layer, no CMS (Phase 4). Clearly labelled, swappable in one file.
 */
export const journalPosts: JournalPost[] = [
  {
    slug: "arranging-care-for-parents-from-abroad",
    title: "Arranging care for your parents in Nigeria from abroad",
    excerpt:
      "A practical guide for adult children overseas: how to set up reliable, reported home care for a parent back home.",
    date: "2026-05-12",
    readingMinutes: 6,
    category: "Family guides",
    body: [
      {
        type: "p",
        text: "If you live abroad and your parents are in Nigeria, distance turns small worries into large ones. This guide walks through arranging home care you can actually trust from thousands of miles away.",
      },
      { type: "h2", text: "Start with an honest assessment" },
      {
        type: "p",
        text: "Good care begins by understanding the real need, not the feared one. A proper assessment looks at daily living, health, the home and the family's worries, then recommends only what is needed.",
      },
      { type: "h2", text: "Insist on reporting" },
      {
        type: "p",
        text: "The single most important thing for a family abroad is visibility. Ask for updates after visits so you always know how your parent is doing.",
      },
      { type: "h2", text: "What to check before you commit" },
      {
        type: "ul",
        items: [
          "Are caregivers background-checked and trained?",
          "Are nurses registered with the NMCN?",
          "Can you reach someone across time zones, including on WhatsApp?",
          "Can you pay in Naira from abroad?",
        ],
      },
    ],
    placeholder: true,
  },
  {
    slug: "signs-your-parent-may-need-home-care",
    title: "Five signs your parent may need home care",
    excerpt:
      "The quiet changes that tell you it is time to bring in help, and how to raise it gently.",
    date: "2026-04-03",
    readingMinutes: 4,
    category: "Family guides",
    body: [
      {
        type: "p",
        text: "Needing help rarely arrives as one dramatic moment. It shows up in small changes. Here are the signs families most often notice.",
      },
      {
        type: "ul",
        items: [
          "Missed medication or muddled doses",
          "Weight loss or a fridge with little fresh food",
          "Falls, or a new fear of moving around the house",
          "Withdrawal from friends and routine",
          "A home that is no longer being kept up",
        ],
      },
      { type: "h2", text: "Raising it gently" },
      {
        type: "p",
        text: "Lead with respect for their independence. Frame help as support that keeps them in their own home, which is usually exactly what they want.",
      },
    ],
    placeholder: true,
  },
  {
    slug: "recovering-well-at-home-after-surgery",
    title: "Recovering well at home after surgery",
    excerpt:
      "How the first weeks after an operation decide recovery, and what good home care does in that window.",
    date: "2026-02-18",
    readingMinutes: 5,
    category: "Health",
    body: [
      {
        type: "p",
        text: "The weeks after surgery are when complications happen and when recovery is won or lost. Careful home care in that window makes the difference.",
      },
      { type: "h2", text: "What good post-surgery care covers" },
      {
        type: "ul",
        items: [
          "Wound care and medication by a registered nurse",
          "Physiotherapy to rebuild strength safely",
          "Help washing, dressing and moving without falls",
          "Watchful reporting so problems are caught early",
        ],
      },
    ],
    placeholder: true,
  },
];

export function getJournalPost(slug: string): JournalPost | undefined {
  return journalPosts.find((p) => p.slug === slug);
}
