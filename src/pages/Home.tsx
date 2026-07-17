import { lazy, Suspense } from "react";
import { Seo } from "@/components/Seo";
import { Hero } from "@/sections/home/Hero";
import { TrustStrip } from "@/sections/home/TrustStrip";
import { medicalBusinessLd, faqLd } from "@/lib/jsonld";
import { faqItems } from "@/content/faq";
import { legacyMetaDescription, legacyMetaKeywords } from "@/content/about";

/**
 * Only the hero and trust strip are eager. Everything below the fold loads in
 * a separate chunk so the LCP text and image are not queued behind twelve
 * sections of JavaScript on a mid-range Android over 4G.
 */
const BelowFold = lazy(() => import("@/sections/home/BelowFold"));

export default function Home() {
  return (
    <>
      {/* M02 preserved verbatim as the home meta description; M03 as keywords. */}
      <Seo
        title="Home | Omojolagbe Geriatric Care Foundation"
        description={legacyMetaDescription}
        keywords={legacyMetaKeywords}
        path="/"
        jsonLd={[medicalBusinessLd(), faqLd(faqItems.slice(0, 6))]}
      />
      <Hero />
      <TrustStrip />
      {/* No fallback UI: the fold is already painted, and a spinner here would
          only flash. min-height keeps the scrollbar honest while it loads. */}
      <Suspense fallback={<div className="min-h-screen" />}>
        <BelowFold />
      </Suspense>
    </>
  );
}
