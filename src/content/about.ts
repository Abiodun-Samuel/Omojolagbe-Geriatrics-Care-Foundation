/** About-page content. Every original string preserved verbatim
 *  (docs/CONTENT_INVENTORY.md IDs noted). */

// AB02 (about page): the fullest variant, with the CAC certificate number.
export const foundingParagraph =
  "Omojolagbe Geriatric Care Foundation was established in 2018 in Ibadan, Oyo State Nigeria with CAC Cert. No: 191574. It is a reputable organization working in the way of creating healthier, happier and fruitful life for the aged. We have impacted the lives of over 1000 elderly people in Ibadan and Nigeria in general.";

// A02 (home): the CAC-worded variant, used in the home About section.
export const foundingParagraphHome =
  "Omojolagbe Geriatric Care Foundation was established in 2018 in Ibadan, Oyo State Nigeria and fully registered by The Corporate Affairs Commission. It is a reputable organization working in the way of creating healthier, happier and fruitful life for the aged. We have impacted the lives of over 1000 elderly people in Ibadan and Nigeria in general.";

// M02: the original meta description.
export const legacyMetaDescription =
  "Omojolagbe Geriatric Care Foundation is a reputable organization working in the way of creating healthier, happier and fruitful life for the aged. We have impacted the lives of over 1000 elderly people in Ibadan and Nigeria in general";

// M03: the original meta keywords.
export const legacyMetaKeywords =
  "Assisted living Memory care Home care Geriatric Care";

// A04-A07: home "We" phrasing of the objectives, preserved.
export const objectivesWeVoice = [
  "We provide high quality health care services that are efficient and supportive to the elderly persons.",
  "We use all our efforts in taking care of the aged so as to regain their independence and active ageing.",
  "We conduct empowerment program for the vulnerable among the elderly.",
  "We collaborate with relevant organizations within and outside the country also to provide support and structure for the elderly.",
];

// AB03-AB06: about "To" phrasing of the objectives, preserved.
export const objectivesToVoice = [
  "To provide high quality health care services that are efficient and supportive to the elderly persons.",
  "To use all our efforts in taking care of the aged so as to regain their independence and active ageing.",
  "To do empowerment program for the vulnerable among the elderly.",
  "To collaborate with relevant organizations within and outside the country also to provide support and structure for the elderly.",
];

// AB07 preserved.
export const audienceLine =
  "For Senior Citizens, Disabled Family Members, Men & Women 50 years and above.";

// AB08-AB11 preserved.
export const mission = {
  heading: "Our Mission",
  body: "To create awareness for the elderly on how to age gracefully through sensitizing programs on the media, seminars and conferences.",
};
export const vision = {
  heading: "Our Vision",
  body: "A society free of sickness, disease and untimely death among the elderly people.",
};

// AB12-AB16 preserved (the foundation arm). AB17-AB20 alt texts preserved
// as each item's `alt`.
export const needs = [
  { label: "Donors.", icon: "donor", alt: "donor" },
  {
    label: "Wheel chairs, crutches, and walkers for disabled old people.",
    icon: "wheelchair",
    alt: "wheelchair",
  },
  { label: "An ambulance.", icon: "ambulance", alt: "ambulance" },
  { label: "Land and Building.", icon: "building", alt: "land and building" },
] as const;

/** Personal care / quality of life narrative from the original home Services
 *  section (S01-S06), preserved verbatim. */
export const personalCare = {
  heading: "Personal Care",
  paragraphs: [
    "At Omojolagbe Geriatric Care Foundation, we understand the unique needs and challenges that come with aging. Our mission is to provide compassionate and reliable personal care services tailored specifically for seniors, ensuring a life of dignity, comfort, and independence.",
    "We provide a Comprehensive Personal Assistance: From bathing, grooming, and dressing to medication reminders and mobility assistance, our caregivers are trained to offer support with the utmost respect and empathy.",
  ],
};
export const qualityOfLife = {
  heading: "Quality Of Life",
  paragraphs: [
    "At Omojolagbe Care Foundation, we`re dedicated to providing more than just care; were committed to enhancing qualify of lives. Our trained caregivers engage seniors in meaningful activities, conversations, and outings to foster emotional well-being and social interactions.",
    "Life is meant to be lived fully at every age. Our center is a vibrant hub of activities like arts, crafts and games. There`s always something enriching happening here.",
  ],
};

/** Home services intro (SV02-SV03) preserved. */
export const homeServicesIntro = {
  heading: "Omojolagbe Geriatric Home Care Services",
  body: "Our Care home services play a pivotal role in ensuring the well-being, safety, and quality of life of the elderly population who may require additional support and care as they age.",
};

/** Gallery narrative (G02-G03) preserved verbatim, including the inherited em
 *  dash in the second line (docs/DECISIONS.md D1). */
export const galleryNarrative = [
  "Dive into our captivating collection of images and videos that encapsulate moments, stories, and the essence of our journey.",
  "Each image and video captures the unique beauty of aging — a mosaic of experiences, laughter, resilience, and cherished memories.",
];

/** Home contact narrative (C02) preserved. */
export const contactNarrative =
  "We`re committed to providing compassionate care and valuable resources for seniors and their families. If you have questions, need assistance, or simply want to connect, our team is ready to help.";

/** Hero line (H02) preserved: the three yellow-wrapped words. */
export const heroLegacyLine = {
  before: "We create ",
  words: ["healthier", "happier", "fruitful"],
  after: " life for the elderly.",
};
