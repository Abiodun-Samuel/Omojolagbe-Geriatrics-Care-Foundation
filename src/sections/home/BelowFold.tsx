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

/**
 * Everything on the home page below the fold, in one lazily loaded chunk.
 * The hero and trust strip are the only things a visitor sees on first paint,
 * so the rest must not compete with them for main-thread time on a mid-range
 * Android over 4G, which is what this audience actually uses.
 */
export default function BelowFold() {
  return (
    <>
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
