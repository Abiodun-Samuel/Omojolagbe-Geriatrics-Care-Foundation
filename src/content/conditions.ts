export type Condition = {
  slug: string;
  name: string;
  summary: string;
  intro: string;
  /** how we help, plain language */
  approach: string[];
  relatedServices: string[];
};

/** "Who we care for" audience pages (Phase 4 IA). New copy in the brand voice;
 *  care types are drawn from the original services list and the brief. */
export const conditions: Condition[] = [
  {
    slug: "elderly-care",
    name: "Elderly care",
    summary: "Everyday support so an older parent stays safe and independent at home.",
    intro:
      "Ageing well at home takes the right help at the right moments. We support the parts of the day that have become harder while protecting independence and routine.",
    approach: [
      "A free assessment of daily needs and the home",
      "A caregiver matched to your parent, not a stranger each visit",
      "Support with personal care, meals, medication and company",
      "Care reports so the family stays informed",
    ],
    relatedServices: ["personal-care", "day-care", "live-in-companionship"],
  },
  {
    slug: "post-surgery-recovery",
    name: "Post-surgery recovery",
    summary: "Skilled help to recover safely at home after an operation.",
    intro:
      "The weeks after surgery decide how well someone recovers. We provide the nursing, therapy and personal care that make recovery at home safe and steady.",
    approach: [
      "Registered nurse visits for wounds and medication",
      "Physiotherapy to rebuild strength and movement",
      "Help with washing, dressing and moving safely",
      "Watchful reporting so problems are caught early",
    ],
    relatedServices: ["nursing-care", "physiotherapy", "personal-care"],
  },
  {
    slug: "stroke-and-mobility",
    name: "Stroke and mobility",
    summary: "Rehabilitation and daily support after a stroke or a fall.",
    intro:
      "Regaining movement and confidence takes patient, skilled support. We combine therapy with everyday care to help someone move, communicate and live more freely.",
    approach: [
      "Home-based physiotherapy",
      "Safe transfer and mobility assistance",
      "Support with speech, feeding and routine",
      "Home-safety guidance to prevent falls",
    ],
    relatedServices: ["physiotherapy", "personal-care", "nursing-care"],
  },
  {
    slug: "dementia-and-alzheimers",
    name: "Dementia and Alzheimer's",
    summary: "Calm, structured care for memory loss and confusion.",
    intro:
      "Dementia care is about routine, safety and patience. Our trained caregivers keep the day predictable and the home safe, and keep families in the loop as needs change.",
    approach: [
      "Caregivers trained in dementia support",
      "Structured, familiar daily routines",
      "Gentle handling of confusion and agitation",
      "Regular updates for the family",
    ],
    relatedServices: ["dementia-care", "live-in-companionship", "counseling"],
  },
  {
    slug: "chronic-conditions",
    name: "Chronic conditions",
    summary: "Ongoing management of long-term illness at home.",
    intro:
      "Living with diabetes, hypertension, kidney or heart conditions means steady, watchful care. We help manage medication, monitoring and daily life at home.",
    approach: [
      "Medication support and reminders",
      "Vitals monitoring and clear reporting",
      "Nurse visits when clinically needed",
      "Coordination with your doctor",
    ],
    relatedServices: ["nursing-care", "personal-care", "counseling"],
  },
  {
    slug: "palliative-care",
    name: "Palliative care",
    summary: "Comfort-first care that keeps a loved one at ease at home.",
    intro:
      "When comfort matters most, our care focuses on dignity, relief and presence, so your loved one is at ease and the family is supported.",
    approach: [
      "Comfort and pain-management support",
      "Gentle personal and hygiene care",
      "Emotional support for the whole family",
      "Coordination with the medical team",
    ],
    relatedServices: ["palliative-care", "nursing-care", "counseling"],
  },
  {
    slug: "new-mothers-and-newborn",
    name: "New mothers and newborn",
    summary: "Trusted support in the first weeks with a new baby.",
    intro:
      "The early weeks are precious and exhausting. Our trained support helps a new mother rest and recover while baby is cared for by steady, gentle hands.",
    approach: [
      "Newborn care and feeding support",
      "Help so mum can rest and recover",
      "Light household support around the baby",
      "Reassuring, experienced caregivers",
    ],
    relatedServices: ["personal-care", "live-in-companionship"],
  },
  {
    slug: "live-in-companionship",
    name: "Live-in companionship",
    summary: "One trusted caregiver, living in, day and night.",
    intro:
      "Some families want continuity above all: one familiar caregiver in the home rather than a rota. Live-in companionship gives round-the-clock reassurance.",
    approach: [
      "A consistent, familiar caregiver",
      "Continuous day and night support",
      "Personal care and genuine company",
      "Overnight reassurance for the family",
    ],
    relatedServices: ["live-in-companionship", "personal-care", "recreation"],
  },
];

export function getCondition(slug: string): Condition | undefined {
  return conditions.find((c) => c.slug === slug);
}
