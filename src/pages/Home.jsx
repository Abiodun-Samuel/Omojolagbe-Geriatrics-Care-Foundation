import AboutComponent from "../components/Home/AboutComponent";
import HeroComponent from "../components/Home/HeroComponent";
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
