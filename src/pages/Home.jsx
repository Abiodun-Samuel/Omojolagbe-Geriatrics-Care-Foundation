import AboutSection from "../components/Home/AboutSection";
import ContactSection from "../components/Home/ContactSection";
import GallerySection from "../components/Home/GallerySection";
import HeroSection from "../components/Home/HeroSection";
import ServiceSection from "../components/Home/ServiceSection";
import PageLayout from "../components/common/PageLayout";

const HomePage = () => {
  return (
    <>
      <PageLayout pageTitle="Home">
        <main>
          <HeroSection />
          <AboutSection />
          <ServiceSection />
          <ContactSection />
          <GallerySection />
        </main>
      </PageLayout>
    </>
  );
};

export default HomePage;
