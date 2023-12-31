import AboutSection from "../components/Home/AboutSection";
import HeroSection from "../components/Home/HeroSection";
import PageLayout from "../components/common/PageLayout";

const HomePage = () => {
  return (
    <>
      <PageLayout pageTitle="Home">
        <main>
          <HeroSection />
          <AboutSection />
        </main>
      </PageLayout>
    </>
  );
};

export default HomePage;
