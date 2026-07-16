export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  relationship: string;
  city: string;
  placeholder: true;
};

/**
 * PLACEHOLDER testimonials (docs/DECISIONS.md D7). Plausible, labelled, and
 * swappable in one place. Video-ready card shape (name, relationship, city).
 */
export const sampleTestimonials: Testimonial[] = [
  {
    id: "t-1",
    quote:
      "My mother is treated with real dignity. The caregiver knows her routine, and I get an update after every visit even though I live in London.",
    name: "Chidinma A.",
    relationship: "Daughter, arranging care from abroad",
    city: "London and Ibadan",
    placeholder: true,
  },
  {
    id: "t-2",
    quote:
      "After my father's surgery we were frightened. The nurse who came was calm, skilled and clear about what to watch for. He recovered at home.",
    name: "Olumide F.",
    relationship: "Son",
    city: "Ibadan",
    placeholder: true,
  },
  {
    id: "t-3",
    quote:
      "The assessment was honest. They told us what we actually needed rather than selling us the most expensive plan. That built trust immediately.",
    name: "Halima B.",
    relationship: "Daughter",
    city: "Ibadan",
    placeholder: true,
  },
  {
    id: "t-4",
    quote:
      "Living with dementia is hard on the whole family. Our caregiver brought routine and patience, and finally some rest for me.",
    name: "Emeka N.",
    relationship: "Husband and carer",
    city: "Ibadan",
    placeholder: true,
  },
];

export type CaseStory = {
  id: string;
  title: string;
  summary: string;
  placeholder: true;
};

export const sampleCaseStories: CaseStory[] = [
  {
    id: "cs-1",
    title: "Recovering at home after a hip operation",
    summary:
      "A daughter in Canada arranged nursing and physiotherapy for her father in Ibadan. Six weeks of coordinated care, reported after every visit, and he was walking again.",
    placeholder: true,
  },
  {
    id: "cs-2",
    title: "Steady days with dementia",
    summary:
      "A live-in caregiver brought routine and calm to a family managing their mother's dementia, and gave the primary carer their evenings back.",
    placeholder: true,
  },
];
