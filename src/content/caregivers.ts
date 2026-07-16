export type VettingStep = {
  title: string;
  body: string;
};

/** The vetting funnel, made visible (Phase 1 research). Real process language. */
export const vettingFunnel: VettingStep[] = [
  {
    title: "Application and interview",
    body: "We screen for experience, temperament and a genuine heart for care. Most applicants do not make it past this stage.",
  },
  {
    title: "Background and reference checks",
    body: "We verify identity, check references and confirm a clean record before anyone is considered.",
  },
  {
    title: "Health screening",
    body: "Caregivers are health-screened so they are fit and safe to work in a vulnerable person's home.",
  },
  {
    title: "Skills and scenario assessment",
    body: "We test practical caregiving and how they respond to real situations, not just what they say.",
  },
  {
    title: "Certified training",
    body: "Successful candidates complete our caregiver training and are certified before placement.",
  },
  {
    title: "Supervised placement",
    body: "A supervisor oversees early visits and continues regular checks, so standards hold over time.",
  },
];

export type Caregiver = {
  id: string;
  name: string;
  role: string;
  city: string;
  years: number;
  specialties: string[];
  bio: string;
  placeholder: true;
};

/**
 * PLACEHOLDER caregiver dossiers. Clearly plausible, clearly labelled
 * (placeholder: true) so the client swaps real bios in one place
 * (docs/DECISIONS.md D7). Names read as Nigerian across ethnic groups.
 */
export const sampleCaregivers: Caregiver[] = [
  {
    id: "cg-1",
    name: "Adaeze Okafor",
    role: "Registered Nurse",
    city: "Ibadan",
    years: 9,
    specialties: ["Post-surgery recovery", "Wound care", "Chronic conditions"],
    bio: "Adaeze is a NMCN-registered nurse who has spent nine years bringing hospital-standard care into family homes, calm under pressure and meticulous with reporting.",
    placeholder: true,
  },
  {
    id: "cg-2",
    name: "Ibrahim Sanusi",
    role: "Senior Caregiver",
    city: "Ibadan",
    years: 7,
    specialties: ["Dementia care", "Mobility support", "Live-in care"],
    bio: "Ibrahim specialises in dementia and mobility support. Families describe him as patient, steady and trusted with the hardest days.",
    placeholder: true,
  },
  {
    id: "cg-3",
    name: "Blessing Etim",
    role: "Physiotherapy Aide",
    city: "Ibadan",
    years: 5,
    specialties: ["Stroke rehabilitation", "Falls recovery", "Home therapy"],
    bio: "Blessing helps people rebuild strength and confidence after a stroke or a fall, meeting goals one careful session at a time.",
    placeholder: true,
  },
  {
    id: "cg-4",
    name: "Terhemba Aondo",
    role: "Live-in Caregiver",
    city: "Ibadan",
    years: 6,
    specialties: ["Live-in companionship", "Personal care", "Palliative support"],
    bio: "Terhemba provides continuous live-in care, the one familiar face families ask for when they want consistency day and night.",
    placeholder: true,
  },
];
