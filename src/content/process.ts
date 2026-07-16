export type ProcessStep = {
  number: number;
  title: string;
  body: string;
};

/** The genuinely sequential "How it works" flow. Numbered markers are earned
 *  here (Phase 4). Rendered on the care spine's nodes. */
export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Free care assessment",
    body: "We visit or call to understand your loved one's needs, the home, the health picture and the family's worries. No charge, no pressure.",
  },
  {
    number: 2,
    title: "Caregiver matching",
    body: "We match a vetted caregiver or nurse to the need and the person, not just the task. You meet them before care begins.",
  },
  {
    number: 3,
    title: "A written care plan",
    body: "You get a clear plan: what care is given, when, by whom, and what to watch for. It is agreed with the family, not handed down.",
  },
  {
    number: 4,
    title: "Ongoing supervision",
    body: "A supervisor checks in on the caregiver and the care, so standards hold and problems are caught early.",
  },
  {
    number: 5,
    title: "Family reporting",
    body: "You receive updates after visits, so a family member abroad or across town always knows how their parent is doing.",
  },
];
