/**
 * Centralised, typed media records (Phase 6). No inline image URLs in
 * components. Two kinds of source:
 *   - local: real Nigerian/African photography preserved from the original
 *     build (the brief prizes authentic local imagery over imported stock).
 *   - remote: Unsplash/Pexels CDN URLs with explicit sizing params, for the
 *     contexts the local set does not cover. Every remote URL is verified by
 *     scripts/check-images.ts before shipping.
 */

export type Media = {
  id: string;
  src: string;
  /** Optional srcset for responsive remote images. */
  srcSet?: string;
  width: number;
  height: number;
  alt: string;
  credit?: string;
  focalPoint?: `${number}% ${number}%`;
};

// ---- Local assets (Vite-resolved) -----------------------------------------
import about from "@/assets/images/img/about.jpg";
import aboutPng from "@/assets/images/img/about.png";
import training from "@/assets/images/img/training.jpg";
import galleryIntro from "@/assets/images/img/gallery_intro.jpg";
import hero1 from "@/assets/images/bg/hero1.jpg";
import hero2 from "@/assets/images/bg/hero2.jpg";
import hero3 from "@/assets/images/bg/hero3.jpg";

import expert from "@/assets/images/expert/expert.jpeg";
import expert1 from "@/assets/images/expert/expert1.jpeg";
import expert2 from "@/assets/images/expert/expert2.jpeg";
import expert3 from "@/assets/images/expert/expert3.jpeg";
import expert4 from "@/assets/images/expert/expert4.jpeg";
import expert5 from "@/assets/images/expert/expert5.jpeg";
import expert6 from "@/assets/images/expert/expert6.jpeg";
import expert7 from "@/assets/images/expert/expert7.jpeg";
import expert8 from "@/assets/images/expert/expert8.jpeg";
import expert9 from "@/assets/images/expert/expert9.jpeg";
import expert10 from "@/assets/images/expert/expert10.jpeg";
import expert11 from "@/assets/images/expert/expert11.jpeg";
import expert12 from "@/assets/images/expert/expert12.jpeg";

import g1 from "@/assets/images/gallery/gallery1.jpg";
import g2 from "@/assets/images/gallery/gallery2.jpg";
import g3 from "@/assets/images/gallery/gallery3.jpg";
import g4 from "@/assets/images/gallery/gallery4.jpg";
import g5 from "@/assets/images/gallery/gallery5.jpg";
import g6 from "@/assets/images/gallery/gallery6.jpg";
import g7 from "@/assets/images/gallery/gallery7.jpg";
import g8 from "@/assets/images/gallery/gallery8.jpg";
import g9 from "@/assets/images/gallery/gallery9.jpg";
import g10 from "@/assets/images/gallery/gallery10.jpg";
import g11 from "@/assets/images/gallery/gallery11.jpg";
import g12 from "@/assets/images/gallery/gallery12.jpg";
import g13 from "@/assets/images/gallery/gallery13.jpg";
import g14 from "@/assets/images/gallery/gallery14.jpg";
import g15 from "@/assets/images/gallery/gallery15.jpg";
import g16 from "@/assets/images/gallery/gallery16.jpg";
import g17 from "@/assets/images/gallery/gallery17.jpg";
import g18 from "@/assets/images/gallery/gallery18.jpg";
import g19 from "@/assets/images/gallery/gallery19.jpg";
import g20 from "@/assets/images/gallery/gallery20.jpg";
import g21 from "@/assets/images/gallery/gallery21.jpg";
import g22 from "@/assets/images/gallery/gallery22.jpg";
import g23 from "@/assets/images/gallery/gallery23.jpg";
import g24 from "@/assets/images/gallery/gallery24.jpg";
import g25 from "@/assets/images/gallery/gallery25.jpg";
import g26 from "@/assets/images/gallery/gallery26.jpg";

const localAlt =
  "Omojolagbe Geriatric Care caregivers and elderly people in Ibadan, Nigeria";

export const media = {
  heroPrimary: {
    id: "hero-primary",
    src: hero1,
    width: 1600,
    height: 1067,
    alt: "A caregiver from Omojolagbe supporting an elderly Nigerian woman at home",
    focalPoint: "50% 35%",
  },
  hero2: {
    id: "hero-2",
    src: hero2,
    width: 1600,
    height: 1067,
    alt: "Elderly Nigerian man being cared for at home",
  },
  hero3: {
    id: "hero-3",
    src: hero3,
    width: 1600,
    height: 1067,
    alt: "Caregiver and elderly resident sharing a moment",
  },
  about: {
    id: "about",
    src: about,
    width: 1200,
    height: 900,
    alt: "Omojolagbe Geriatric Care team with elderly residents",
  },
  aboutSecondary: {
    id: "about-2",
    src: aboutPng,
    width: 1000,
    height: 750,
    alt: "Caregiver assisting an elderly person",
  },
  training: {
    id: "training",
    src: training,
    width: 1080,
    height: 1350,
    // T01 preserved verbatim as the alt.
    alt: "Caregiver Training Flyer",
  },
  galleryIntro: {
    id: "gallery-intro",
    src: galleryIntro,
    width: 1200,
    height: 900,
    alt: "Moments from Omojolagbe Geriatric Care",
  },
} satisfies Record<string, Media>;

/** The four images used in the home hero collage. Real Nigerian care and
 *  community photography, with descriptive alt text (the gallery set below
 *  shares one generic caption). */
export const heroCollage: Media[] = [
  {
    id: "hero-collage-1",
    src: expert,
    width: 700,
    height: 600,
    alt: "Caregivers praying with and supporting elderly women at an Omojolagbe gathering in Ibadan",
  },
  {
    id: "hero-collage-2",
    src: expert5,
    width: 700,
    height: 600,
    alt: "An Omojolagbe caregiver speaking with a room of seated elderly men and women",
  },
  {
    id: "hero-collage-3",
    src: expert3,
    width: 700,
    height: 600,
    alt: "A joyful moment with music at an Omojolagbe elderly care event",
  },
  {
    id: "hero-collage-4",
    src: expert4,
    width: 700,
    height: 600,
    alt: "Elderly Nigerian women together at an Omojolagbe community day",
  },
];

/** The 12 expert portraits (real caregiver/consultation photography). */
export const expertPortraits: Media[] = [
  expert,
  expert1,
  expert2,
  expert3,
  expert4,
  expert5,
  expert6,
  expert7,
  expert8,
  expert9,
  expert10,
  expert11,
  expert12,
].map((src, i) => ({
  id: `expert-${i}`,
  src,
  width: 700,
  height: 600,
  // GL05 caption/alt preserved as the accessible description.
  alt: "Omojolagbe Geriatric Care Foundation Gallery",
  credit: localAlt,
}));

/** The 26 gallery photos. */
export const galleryPhotos: Media[] = [
  g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13,
  g14, g15, g16, g17, g18, g19, g20, g21, g22, g23, g24, g25, g26,
].map((src, i) => ({
  id: `gallery-${i}`,
  src,
  width: 900,
  height: i % 3 === 2 ? 900 : 1200,
  // GL05 preserved.
  alt: "Omojolagbe Geriatric Care Foundation Gallery",
}));

/** Videos are served from /public as static files rather than bundled into
 *  JS (they are ~21MB total). Referenced by URL, loaded only on demand. */
export const galleryVideos: string[] = [
  "/media/videos/video1.mp4",
  "/media/videos/video2.mp4",
  "/media/videos/video3.mp4",
  "/media/videos/video4.mp4",
  "/media/videos/video5.mp4",
  "/media/videos/video6.mp4",
];
