export type LegalSection = { heading: string; paragraphs: string[] };
export type LegalDoc = {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
};

const updated = "16 July 2026";

/**
 * Plain-language legal pages. These are a starting point written for a
 * Nigerian home care provider and MUST be reviewed by the client's lawyer
 * before launch (noted in docs/HANDOVER.md). They are deliberately honest and
 * specific rather than boilerplate.
 */

export const privacyDoc: LegalDoc = {
  title: "Privacy",
  intro:
    "This policy explains what we collect when you contact us or arrange care, why we collect it, and what we do with it.",
  updated,
  sections: [
    {
      heading: "What we collect",
      paragraphs: [
        "When you contact us or book an assessment, we collect the details you give us: your name, email, phone number, city, and what you tell us about the person needing care.",
        "When care begins, we keep records of the care provided, including visit notes and health information relevant to that care.",
      ],
    },
    {
      heading: "Why we collect it",
      paragraphs: [
        "We use your details to respond to you, carry out an assessment, match a caregiver, deliver care, and report to you about that care.",
        "Health information is used only to provide safe, appropriate care and is shared only with the caregivers and clinicians involved.",
      ],
    },
    {
      heading: "Who we share it with",
      paragraphs: [
        "We share information with the caregivers and nurses providing your care, and their supervisor.",
        "We do not sell your information. We do not share it with anyone else unless you ask us to, or the law requires it.",
      ],
    },
    {
      heading: "How long we keep it",
      paragraphs: [
        "Enquiries that do not become care are kept only as long as needed to respond. Care records are kept for as long as we are required to hold them, and no longer than necessary.",
      ],
    },
    {
      heading: "Your choices",
      paragraphs: [
        "You can ask us what we hold about you, ask us to correct it, or ask us to delete it where we are not required to keep it. Contact us and we will help.",
      ],
    },
  ],
};

export const termsDoc: LegalDoc = {
  title: "Terms",
  intro:
    "These terms cover using this website and arranging care with us. They are written plainly on purpose.",
  updated,
  sections: [
    {
      heading: "About us",
      paragraphs: [
        "Omojolagbe Geriatric Care Foundation is registered with the Corporate Affairs Commission of Nigeria (Cert. No: 191574) and is based in Ibadan, Oyo State.",
      ],
    },
    {
      heading: "Using this website",
      paragraphs: [
        "Information on this site describes our services in general terms. It is not medical advice. If someone is in a medical emergency, contact emergency services or a hospital immediately.",
        "Pricing shown on this site is indicative. An exact cost is confirmed after a free assessment.",
      ],
    },
    {
      heading: "Arranging care",
      paragraphs: [
        "Care begins only after an assessment and an agreed, written care plan. The plan sets out what care is provided, when, and by whom.",
        "Either side can end an arrangement. We will always work with you to hand over care safely rather than stop abruptly.",
      ],
    },
    {
      heading: "Our caregivers",
      paragraphs: [
        "Caregivers are vetted, trained and supervised by us. Clinical care is provided by nurses registered with the Nursing and Midwifery Council of Nigeria.",
        "If you are ever unhappy with a caregiver, tell us. We will address it and, where needed, match someone else.",
      ],
    },
    {
      heading: "Payment",
      paragraphs: [
        "Care is paid monthly unless agreed otherwise. Families abroad can arrange and pay for care in Naira on behalf of a relative in Nigeria.",
      ],
    },
  ],
};

export const cookiesDoc: LegalDoc = {
  title: "Cookies",
  intro:
    "This site is deliberately light on tracking. Here is exactly what it does.",
  updated,
  sections: [
    {
      heading: "What this site uses",
      paragraphs: [
        "This website does not set advertising or tracking cookies, and does not profile you across other websites.",
        "Your browser may store basic preferences locally to make the site work as expected. This stays on your device.",
      ],
    },
    {
      heading: "Embedded content",
      paragraphs: [
        "The contact page embeds a Google map so you can find our office. Google may set its own cookies when that map loads. If you would rather avoid that, use the written address instead.",
        "Clicking a WhatsApp link opens WhatsApp, which has its own privacy terms.",
      ],
    },
    {
      heading: "If this changes",
      paragraphs: [
        "If we ever add analytics, we will say so here and ask for your consent first.",
      ],
    },
  ],
};
