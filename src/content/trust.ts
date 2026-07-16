import type { LucideIcon } from "lucide-react";
import {
  CalendarClock,
  Users,
  MapPin,
  BadgeCheck,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";
import { site } from "@/lib/site";

export type TrustStat = {
  /** numeric value for the count-up, and a suffix like "+" */
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon: LucideIcon;
};

const yearsActive = new Date().getFullYear() - site.founded;

/** Trust strip facts. All grounded in the original copy (since 2018, 1000+
 *  elderly served, CAC registered) plus verifiable market standards. */
export const trustStats: TrustStat[] = [
  {
    value: yearsActive,
    suffix: "+ years",
    label: "Caring since 2018",
    icon: CalendarClock,
  },
  {
    value: 1000,
    suffix: "+",
    label: "Elderly lives impacted",
    icon: Users,
  },
  {
    value: 1,
    label: "City served, expanding",
    icon: MapPin,
  },
];

export type TrustPoint = {
  title: string;
  body: string;
  icon: LucideIcon;
};

/** The vetting/credential proof points (Phase 1 research: trust before price). */
export const trustPoints: TrustPoint[] = [
  {
    title: "CAC registered",
    body: `Registered with the Corporate Affairs Commission, certificate number ${site.cacCert}.`,
    icon: BadgeCheck,
  },
  {
    title: "NMCN-licensed nurses",
    body: "Clinical care is delivered by nurses registered with the Nursing and Midwifery Council of Nigeria.",
    icon: Stethoscope,
  },
  {
    title: "Vetted, trained caregivers",
    body: "Every caregiver is background-checked, reference-checked, health-screened and trained before they enter a home.",
    icon: ShieldCheck,
  },
];
