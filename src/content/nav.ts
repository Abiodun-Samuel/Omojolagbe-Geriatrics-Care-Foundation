import type { LucideIcon } from "lucide-react";
import {
  Home,
  Info,
  HeartHandshake,
  Globe2,
  Phone,
  Layers,
  Users,
  ListChecks,
  ShieldCheck,
  Wallet,
  Quote,
  BookOpen,
  HelpCircle,
  Briefcase,
  Images,
  CalendarCheck,
} from "lucide-react";

export type NavChild = {
  label: string;
  to: string;
  description?: string;
  icon?: LucideIcon;
};
export type NavItem = {
  label: string;
  to?: string;
  icon?: LucideIcon;
  children?: NavChild[];
};

/** Primary navigation. Preserves original items (Home, About, Services,
 *  Gallery, Contact) and adds the new IA (docs/GAP_ANALYSIS.md). Each item
 *  carries a lucide icon rendered in the navbar and mobile menu. */
export const primaryNav: NavItem[] = [
  { label: "Home", to: "/", icon: Home },
  { label: "About", to: "/about", icon: Info },
  {
    label: "Services",
    to: "/services",
    icon: HeartHandshake,
    children: [
      {
        label: "Omojolagbe Home Care Services",
        to: "/services",
        description: "Every service we provide, in one place",
        icon: Layers,
      },
      {
        label: "Who we care for",
        to: "/who-we-care-for",
        description: "Elderly, dementia, post-surgery, palliative and more",
        icon: Users,
      },
      {
        label: "How it works",
        to: "/how-it-works",
        description: "Assessment, matching, care plan, supervision",
        icon: ListChecks,
      },
      {
        label: "Our caregivers",
        to: "/caregivers",
        description: "How we vet, train and supervise",
        icon: ShieldCheck,
      },
      {
        label: "Pricing",
        to: "/pricing",
        description: "What care costs and what affects it",
        icon: Wallet,
      },
    ],
  },
  { label: "Diaspora", to: "/diaspora", icon: Globe2 },
  {
    label: "More",
    icon: Layers,
    children: [
      { label: "Testimonials", to: "/testimonials", icon: Quote },
      { label: "Journal", to: "/journal", icon: BookOpen },
      { label: "FAQ", to: "/faq", icon: HelpCircle },
      { label: "Careers", to: "/careers", icon: Briefcase },
      { label: "Gallery", to: "/gallery", icon: Images },
    ],
  },
  { label: "Contact", to: "/contact", icon: Phone },
];

export const footerNav: { heading: string; links: NavChild[] }[] = [
  {
    // FT02 "Useful Links" preserved from the original footer.
    heading: "Useful Links",
    links: [
      { label: "Home", to: "/", icon: Home },
      { label: "About", to: "/about", icon: Info },
      { label: "Gallery", to: "/gallery", icon: Images },
      { label: "Contact", to: "/contact", icon: Phone },
      { label: "Home Care Services", to: "/services", icon: HeartHandshake },
    ],
  },
  {
    heading: "Care",
    links: [
      { label: "Home Care Services", to: "/services", icon: HeartHandshake },
      { label: "Who we care for", to: "/who-we-care-for", icon: Users },
      { label: "How it works", to: "/how-it-works", icon: ListChecks },
      { label: "Pricing", to: "/pricing", icon: Wallet },
      { label: "Our caregivers", to: "/caregivers", icon: ShieldCheck },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Book an assessment", to: "/book-assessment", icon: CalendarCheck },
      { label: "Diaspora families", to: "/diaspora", icon: Globe2 },
      { label: "Careers", to: "/careers", icon: Briefcase },
      { label: "Journal", to: "/journal", icon: BookOpen },
      { label: "Testimonials", to: "/testimonials", icon: Quote },
      { label: "FAQ", to: "/faq", icon: HelpCircle },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", to: "/privacy" },
      { label: "Terms", to: "/terms" },
      { label: "Cookies", to: "/cookies" },
    ],
  },
];
