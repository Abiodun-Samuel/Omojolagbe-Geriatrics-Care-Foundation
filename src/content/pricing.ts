export type PricingPlan = {
  id: string;
  name: string;
  /** indicative monthly figure in Naira, PLACEHOLDER */
  fromNaira: number;
  cadence: string;
  summary: string;
  includes: string[];
  bestFor: string;
  featured?: boolean;
  placeholder: true;
};

/**
 * PLACEHOLDER indicative pricing (docs/DECISIONS.md D4c, confirmed by client).
 * Ranges are sample figures grounded in real Nigerian market points from
 * Phase 1 research (~N25k-N35k/month entry tiers). Final cost always follows
 * a free assessment. Client swaps real numbers here in one file.
 */
export const pricingPlans: PricingPlan[] = [
  {
    id: "visiting",
    name: "Visiting care",
    fromNaira: 60000,
    cadence: "per month",
    summary: "Scheduled caregiver visits for daily support at home.",
    includes: [
      "Regular caregiver visits",
      "Personal care and companionship",
      "Medication reminders",
      "Care report after visits",
    ],
    bestFor: "Older adults who need a hand each day but not full-time care.",
    placeholder: true,
  },
  {
    id: "daily",
    name: "Daily care",
    fromNaira: 150000,
    cadence: "per month",
    summary: "A caregiver through the day, home in the evening.",
    includes: [
      "Full daytime caregiver cover",
      "Personal care, meals and activity",
      "Medication support",
      "Regular family reporting",
    ],
    bestFor: "Working families who need reliable daytime cover.",
    featured: true,
    placeholder: true,
  },
  {
    id: "live-in",
    name: "Live-in care",
    fromNaira: 280000,
    cadence: "per month",
    summary: "A trained caregiver living in, round-the-clock support.",
    includes: [
      "24-hour in-home caregiver",
      "One consistent, familiar carer",
      "Full personal care and overnight support",
      "Priority family reporting",
    ],
    bestFor: "Families who want continuous, one-to-one care at home.",
    placeholder: true,
  },
];

/** What affects cost, honest and specific. */
export const costFactors: string[] = [
  "The level of care needed, from occasional visits to live-in support",
  "Whether clinical nursing care is involved",
  "How many hours or days of cover each week",
  "Specialist needs such as dementia or palliative care",
  "Your location and travel involved",
];

export const fundingNotes: string[] = [
  "Care is paid privately by the family, monthly.",
  "Families abroad can arrange and pay for care in Naira on behalf of a parent in Nigeria.",
  "Some costs may be supported by an HMO or health insurance plan. We can advise on what your plan may cover during the assessment.",
];
