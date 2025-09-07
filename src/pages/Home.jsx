import AboutSection from "../components/Home/AboutSection";
import ContactSection from "../components/Home/ContactSection";
import GallerySection from "../components/Home/GallerySection";
import HeroSection from "../components/Home/HeroSection";
import ServiceSection from "../components/Home/ServiceSection";
import training from "../assets/images/img/training.jpg";
import PageLayout from "../components/common/PageLayout";
import BootstrapModal from "../components/common/TrainingModal";
import { Link } from "react-router-dom";


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
      <BootstrapModal title='Training'>
        <div className="row justify-content-center align-items-center ">
          <div className="col-lg-6">
            <Link to={'/training'}>
              <img
                src={training}
                alt="Caregiver Training Flyer"
                className="img-fluid w-100"
              />
            </Link>
          </div>
        </div>
      </BootstrapModal>
    </>
  );
};

export default HomePage;
