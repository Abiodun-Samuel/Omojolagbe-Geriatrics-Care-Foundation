import AboutComponent from "../components/Home/AboutSection";
import HeroComponent from "../components/Home/HeroSection";
import PageLayout from "../components/common/PageLayout";

const HomePage = () => {
  return (
    <>
      <PageLayout pageTitle="Home">
        <main>
          <HeroComponent />
          <AboutComponent />
        </main>
      </PageLayout>
    </>
  );
};

export default HomePage;
