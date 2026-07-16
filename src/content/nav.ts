export type NavChild = { label: string; to: string; description?: string };
export type NavItem = {
  label: string;
  to?: string;
  children?: NavChild[];
};

/** Primary navigation. Preserves original items (Home, About, Services,
 *  Gallery, Contact) and adds the new IA (docs/GAP_ANALYSIS.md). */
export const primaryNav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Services",
    to: "/services",
    children: [
      {
        label: "Omojolagbe Home Care Services",
        to: "/services",
        description: "Every service we provide, in one place",
      },
      {
        label: "Who we care for",
        to: "/who-we-care-for",
        description: "Elderly, dementia, post-surgery, palliative and more",
      },
      {
        label: "How it works",
        to: "/how-it-works",
        description: "Assessment, matching, care plan, supervision",
      },
      {
        label: "Our caregivers",
        to: "/caregivers",
        description: "How we vet, train and supervise",
      },
      {
        label: "Pricing",
        to: "/pricing",
        description: "What care costs and what affects it",
      },
    ],
  },
  { label: "Diaspora", to: "/diaspora" },
  {
    label: "More",
    children: [
      { label: "Testimonials", to: "/testimonials" },
      { label: "Journal", to: "/journal" },
      { label: "FAQ", to: "/faq" },
      { label: "Careers", to: "/careers" },
      { label: "Gallery", to: "/gallery" },
    ],
  },
  { label: "Contact", to: "/contact" },
];

export const footerNav: { heading: string; links: NavChild[] }[] = [
  {
    heading: "Care",
    links: [
      { label: "Home Care Services", to: "/services" },
      { label: "Who we care for", to: "/who-we-care-for" },
      { label: "How it works", to: "/how-it-works" },
      { label: "Pricing", to: "/pricing" },
      { label: "Our caregivers", to: "/caregivers" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Diaspora families", to: "/diaspora" },
      { label: "Careers", to: "/careers" },
      { label: "Journal", to: "/journal" },
      { label: "Gallery", to: "/gallery" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Book an assessment", to: "/book-assessment" },
      { label: "Contact", to: "/contact" },
      { label: "Testimonials", to: "/testimonials" },
      { label: "FAQ", to: "/faq" },
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
