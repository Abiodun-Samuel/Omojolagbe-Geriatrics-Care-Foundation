import { Seo } from "@/components/Seo";
import { Hero } from "@/sections/home/Hero";
import { TrustStrip } from "@/sections/home/TrustStrip";
import { AboutFoundation } from "@/sections/home/AboutFoundation";
import { ServicesOverview } from "@/sections/home/ServicesOverview";
import { WhoWeCareFor } from "@/sections/home/WhoWeCareFor";
import { HowItWorks } from "@/sections/home/HowItWorks";
import { CaregiversPreview } from "@/sections/home/CaregiversPreview";
import { WhyFamilies } from "@/sections/home/WhyFamilies";
import { PricingPreview } from "@/sections/home/PricingPreview";
import { TestimonialsPreview } from "@/sections/home/TestimonialsPreview";
import { Coverage } from "@/sections/home/Coverage";
import { JournalPreview } from "@/sections/home/JournalPreview";
import { FaqPreview } from "@/sections/home/FaqPreview";
import { CtaBand } from "@/sections/CtaBand";
import { medicalBusinessLd, faqLd } from "@/lib/jsonld";
import { faqItems } from "@/content/faq";
import { legacyMetaDescription, legacyMetaKeywords } from "@/content/about";

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
      <AboutFoundation />
      <ServicesOverview />
      <WhoWeCareFor />
      <HowItWorks />
      <CaregiversPreview />
      <WhyFamilies />
      <PricingPreview />
      <TestimonialsPreview />
      <Coverage />
      <JournalPreview />
      <FaqPreview />
      <CtaBand />
    </>
  );
}
