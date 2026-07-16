export type Role = {
  slug: string;
  title: string;
  type: string;
  location: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  placeholder: true;
};

/**
 * PLACEHOLDER open roles (docs/DECISIONS.md D7). Recruitment is half the
 * business (Phase 1). Swappable in one file.
 */
export const openRoles: Role[] = [
  {
    slug: "home-caregiver",
    title: "Home caregiver",
    type: "Full-time",
    location: "Ibadan",
    summary:
      "Provide daily personal care and companionship to older adults in their homes, with training and supervision from our team.",
    responsibilities: [
      "Support with bathing, grooming, dressing and mobility",
      "Medication reminders and meal preparation",
      "Genuine companionship and activity",
      "Clear reporting after each visit",
    ],
    requirements: [
      "A genuine heart for caring for older people",
      "Patience, reliability and honesty",
      "Willingness to complete our certified training",
      "References we can verify",
    ],
    placeholder: true,
  },
  {
    slug: "registered-nurse",
    title: "Registered nurse",
    type: "Full-time or part-time",
    location: "Ibadan",
    summary:
      "Deliver clinical care in patients' homes, from wound care to chronic condition management, under a written care plan.",
    responsibilities: [
      "Home nursing visits and clinical care",
      "Vitals monitoring and reporting",
      "Medication administration",
      "Coordination with the family and doctors",
    ],
    requirements: [
      "Current registration with the NMCN",
      "Home or hospital nursing experience",
      "Strong communication and reporting",
      "Compassion and professionalism",
    ],
    placeholder: true,
  },
  {
    slug: "live-in-caregiver",
    title: "Live-in caregiver",
    type: "Live-in",
    location: "Ibadan",
    summary:
      "Provide continuous, round-the-clock support to one family as a live-in caregiver.",
    responsibilities: [
      "Round-the-clock personal care and companionship",
      "Overnight support and reassurance",
      "Light household support around care",
      "Regular reporting to the family",
    ],
    requirements: [
      "Caregiving experience and references",
      "Comfort with live-in arrangements",
      "Patience, discretion and reliability",
      "Willingness to complete our training",
    ],
    placeholder: true,
  },
];

export function getRole(slug: string): Role | undefined {
  return openRoles.find((r) => r.slug === slug);
}

/** The existing caregiver training programme, preserved verbatim (TR01-TR18).
 *  Framed as the most recent cohort (docs/DECISIONS.md D8). */
export const trainingProgramme = {
  presenter: "Omojolagbe Geriatric Care Foundation Presents",
  title: "3-Days Intensive Caregiver Training",
  tagline: "Become a Skilled, Confident & Certified Caregiver",
  recentCohort: {
    date: "18th - 20th September, 2025",
    time: "9:00am – 4:00pm daily",
    venue:
      "Omojolagbe Geriatric Care Foundation, Alakia Isebo Road, By Onile-Aro B/S, Ibadan, Oyo State.",
  },
  whyHeading: "Why Join This Training?",
  benefits: [
    "Certification in Caregiving",
    "Hands-on Practical Training with elderly care experts",
    "Basic Healthcare Skills – hygiene, medication support, vitals check",
    "Internship & Mentorship Opportunities",
    "Career Guidance on local & international caregiving jobs",
    "Networking with professionals in healthcare and caregiving",
    "Soft Skills – communication, empathy, and stress management",
  ],
  registerHeading: "For Registration & Enquiries:",
  contacts: [
    { name: "Tope", phone: "08163089909" },
    { name: "Dammyy", phone: "07037112792" },
  ],
} as const;
