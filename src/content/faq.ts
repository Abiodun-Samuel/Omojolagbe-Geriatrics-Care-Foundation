export type FaqItem = {
  q: string;
  a: string;
  group: string;
};

/** Grouped, searchable FAQ (Phase 4). New copy in the brand voice, grounded in
 *  the real service and the Phase 1 research on what care buyers ask. */
export const faqItems: FaqItem[] = [
  {
    group: "Getting started",
    q: "How do we start?",
    a: "Book a free care assessment. We visit or call, understand your loved one's needs, and recommend a plan. There is no charge and no obligation.",
  },
  {
    group: "Getting started",
    q: "Is the assessment really free?",
    a: "Yes. The assessment is free and comes before any cost. We would rather understand the real need than sell you the wrong plan.",
  },
  {
    group: "Getting started",
    q: "How quickly can care begin?",
    a: "Once we have completed the assessment and matched a caregiver, care can usually begin within a few days. Urgent situations are prioritised.",
  },
  {
    group: "Our caregivers",
    q: "How do you vet your caregivers?",
    a: "Every caregiver goes through application and interview, background and reference checks, health screening, a skills assessment, certified training, and supervised placement before caring for your loved one.",
  },
  {
    group: "Our caregivers",
    q: "Are your nurses licensed?",
    a: "Yes. Clinical care is delivered by nurses registered with the Nursing and Midwifery Council of Nigeria (NMCN).",
  },
  {
    group: "Our caregivers",
    q: "Will my parent have the same caregiver?",
    a: "We match a caregiver to the person and aim for consistency, so your parent sees a familiar face rather than a different stranger each visit.",
  },
  {
    group: "Care and cost",
    q: "How much does care cost?",
    a: "Cost depends on the level of care, hours and any clinical needs. We publish indicative ranges on the pricing page, and confirm an exact figure after the free assessment.",
  },
  {
    group: "Care and cost",
    q: "Can an HMO or insurance help with the cost?",
    a: "Some costs may be supported by an HMO or health insurance plan. We can advise on what your plan may cover during the assessment.",
  },
  {
    group: "Care and cost",
    q: "Where do you provide care?",
    a: "We are based in Ibadan and provide care there today. We are expanding, and we help diaspora families arrange care for parents in Nigeria. Ask us about your city.",
  },
  {
    group: "Families abroad",
    q: "I live abroad. Can I arrange care for my parent in Nigeria?",
    a: "Yes. This is one of the families we serve most. You can arrange and pay for care from abroad in Naira, and receive reports so you always know how your parent is doing.",
  },
  {
    group: "Families abroad",
    q: "How will I know my parent is being cared for?",
    a: "You receive updates after visits: what care was given and how your parent is doing. A 24/7 line, including WhatsApp, means you can always reach us across time zones.",
  },
];

export const faqGroups = [
  "Getting started",
  "Our caregivers",
  "Care and cost",
  "Families abroad",
] as const;
