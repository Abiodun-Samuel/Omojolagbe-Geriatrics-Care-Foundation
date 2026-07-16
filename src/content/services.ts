import type { LucideIcon } from "lucide-react";
import {
  HeartHandshake,
  Stethoscope,
  Brain,
  HandHeart,
  Activity,
  Home,
  Sun,
  MessageSquareHeart,
  Bed,
  Users,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  /** short card line */
  summary: string;
  /** longer intro on the detail page */
  intro: string;
  icon: LucideIcon;
  /** what is included, plain verbs */
  includes: string[];
  /** who this is right for */
  forWho: string;
  /** original "Level Of Care" label this maps to, preserved verbatim */
  originalLabel?: string;
};

/**
 * Services. The 12 original "Level Of Care" items (SV05-SV16) are preserved
 * verbatim in `originalLabel` and folded into these service entries so no
 * original string is lost. New descriptive copy is written in the brand voice.
 */
export const services: Service[] = [
  {
    slug: "personal-care",
    name: "Personal care",
    summary:
      "Help with bathing, grooming, dressing, mobility and medication reminders.",
    intro:
      "Everyday support that protects dignity. Our caregivers assist with the parts of the day that have become harder, so your parent stays comfortable and in control at home.",
    icon: HeartHandshake,
    includes: [
      "Bathing, grooming and dressing",
      "Medication reminders",
      "Mobility and transfer assistance",
      "Meal preparation and feeding support",
      "Companionship through the day",
    ],
    forWho: "Older adults who need a hand with daily living but want to stay at home.",
  },
  {
    slug: "nursing-care",
    name: "Nursing care",
    summary: "Clinical care at home from nurses registered with the NMCN.",
    intro:
      "When care needs are clinical, a registered nurse comes to the home. Wound care, injections, vitals, catheter and tube care, all delivered under a written plan and supervised.",
    icon: Stethoscope,
    includes: [
      "Registered nurse visits",
      "Wound care and dressing changes",
      "Vitals monitoring and reporting",
      "Injections and medication administration",
      "Post-hospital recovery support",
    ],
    forWho: "Families whose loved one needs skilled clinical care at home.",
    originalLabel: "Nursing care.",
  },
  {
    slug: "dementia-care",
    name: "Dementia care",
    summary: "Patient, structured support for memory loss and confusion.",
    intro:
      "Dementia changes the day. Our caregivers are trained to bring routine, calm and safety, and to keep families informed as needs change.",
    icon: Brain,
    includes: [
      "Trained dementia caregivers",
      "Safe, structured daily routines",
      "Support with agitation and confusion",
      "Family updates as needs change",
    ],
    forWho: "People living with dementia or Alzheimer's, and the families supporting them.",
    originalLabel: "Dementia care.",
  },
  {
    slug: "palliative-care",
    name: "Palliative care",
    summary: "Comfort-focused care that keeps a loved one at ease at home.",
    intro:
      "When comfort matters most, we focus on dignity, pain relief and presence, working alongside your medical team so no one carries it alone.",
    icon: HandHeart,
    includes: [
      "Comfort and pain management support",
      "Personal and hygiene care",
      "Emotional support for the family",
      "Coordination with medical teams",
    ],
    forWho: "Families needing gentle, comfort-first care for a seriously ill loved one.",
    originalLabel: "Palliative care.",
  },
  {
    slug: "physiotherapy",
    name: "Physiotherapy",
    summary: "In-home therapy to rebuild strength, balance and movement.",
    intro:
      "Recovery and mobility work done in the home, so there is no stressful travel. Sessions are planned around your loved one's goals and reviewed as they progress.",
    icon: Activity,
    includes: [
      "Home-based therapy sessions",
      "Strength and balance work",
      "Post-surgery and stroke rehabilitation",
      "Progress reviews",
    ],
    forWho: "Anyone recovering mobility after illness, surgery or a fall.",
    originalLabel: "Physiotherapy.",
  },
  {
    slug: "residential-care",
    name: "Residential care",
    summary: "A supported place to stay when home is no longer safe alone.",
    intro:
      "For times when round-the-clock support in a cared-for setting is the right choice, with the same standards of vetting and supervision we apply at home.",
    icon: Home,
    includes: [
      "Supported living arrangements",
      "24-hour caregiver presence",
      "Meals, hygiene and daily care",
      "Regular family reporting",
    ],
    forWho: "Families for whom staying at home alone is no longer safe.",
    originalLabel: "Residential care.",
  },
  {
    slug: "day-care",
    name: "Day care",
    summary: "Daytime care, activity and company, home in the evening.",
    intro:
      "A structured, sociable day with trained support, so a working family has cover and their parent has company and stimulation.",
    icon: Sun,
    includes: [
      "Supervised daytime care",
      "Activities and social contact",
      "Meals and medication reminders",
      "Safe drop-off and pick-up windows",
    ],
    forWho: "Working families who need reliable daytime cover.",
    originalLabel: "Day care.",
  },
  {
    slug: "counseling",
    name: "Counseling",
    summary: "Emotional support for older adults and their families.",
    intro:
      "Ageing, illness and caregiving are heavy. Our counseling support gives older adults and their families a calm space and practical guidance.",
    icon: MessageSquareHeart,
    includes: [
      "One-to-one emotional support",
      "Family caregiving guidance",
      "Adjustment and bereavement support",
    ],
    forWho: "Older adults and family caregivers carrying an emotional load.",
    originalLabel: "Counseling.",
  },
  {
    slug: "respite-care",
    name: "Respite care",
    summary: "Short-term cover so a family caregiver can rest.",
    intro:
      "Family caregivers need breaks. Respite care steps in for a day, a weekend or a trip, so you can rest knowing your parent is in trained hands.",
    icon: Bed,
    includes: [
      "Short-term or one-off cover",
      "Full personal and daily care",
      "Handover notes on return",
    ],
    forWho: "Family caregivers who need a planned or emergency break.",
    originalLabel: "Respite care.",
  },
  {
    slug: "recreation",
    name: "Recreation",
    summary: "Activities that keep life full: arts, games and outings.",
    intro:
      "Life is meant to be lived fully at every age. We build in the activities, conversation and outings that keep spirits up and minds active.",
    icon: Sparkles,
    includes: [
      "Arts, crafts and games",
      "Conversation and companionship",
      "Supported outings",
    ],
    forWho: "Older adults who thrive on activity and company.",
    originalLabel: "Recreation.",
  },
  {
    slug: "live-in-companionship",
    name: "Live-in companionship",
    summary: "A trained caregiver living in, for round-the-clock support.",
    intro:
      "A live-in caregiver moves into the home and provides continuous, familiar support day and night, one trusted person rather than a rota of strangers.",
    icon: Users,
    includes: [
      "Round-the-clock in-home support",
      "Consistent, familiar caregiver",
      "Personal care and companionship",
      "Overnight reassurance",
    ],
    forWho: "Families who want continuous, one-to-one care at home.",
  },
  {
    slug: "caregiver-training",
    name: "Training of caregivers",
    summary: "Certified training that builds skilled, confident caregivers.",
    intro:
      "We train the next generation of caregivers to our own standard, which is also how we grow our vetted team. See the caregivers page for the full programme.",
    icon: ShieldCheck,
    includes: [
      "Certification in caregiving",
      "Hands-on practical training",
      "Basic healthcare skills",
      "Mentorship and placement",
    ],
    forWho: "People who want a certified caregiving career.",
    originalLabel: "Training of caregivers.",
  },
];

/** Original "Level Of Care" items that map to broader affordances rather than
 *  standalone service pages, preserved verbatim so nothing is lost. */
export const additionalCareItems = [
  "Free medical test.",
  "Charity for the less priviledged.",
] as const;

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
