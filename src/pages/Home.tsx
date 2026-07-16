import { Seo } from "@/components/Seo";
import { Hero } from "@/sections/home/Hero";
import { TrustStrip } from "@/sections/home/TrustStrip";
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

export default function Home() {
  return (
    <>
      <Seo
        title="Home Care and Elderly Support in Nigeria | Omojolagbe Geriatric Care"
        description="Compassionate home care for elderly Nigerians. Vetted caregivers and NMCN-licensed nurses in Ibadan, arranged from home or abroad. Book a free care assessment."
        path="/"
        jsonLd={[medicalBusinessLd(), faqLd(faqItems.slice(0, 6))]}
      />
      <Hero />
      <TrustStrip />
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
