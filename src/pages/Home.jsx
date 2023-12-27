// import { Link } from "react-router-dom";
import transition from "../components/transition";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HelmetComponent from "../components/common/Helmet";
import { Link } from "react-router-dom";
// import Slider from "react-slick";
// import { books } from "../utils/data";
// import svg from "../assets/images/svg.svg";
// import { FaBookOpen, FaAmazon, FaYoutube, FaArrowRight } from "react-icons/fa";
// import YouTube from "react-youtube";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <HelmetComponent pageTitle="Home | OMOJOLAGBE GERIATRICS CARE FOUNDATION" />

      <motion.div
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 0 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
      >
        <main>
          <section id="hero">
            <div
              id="carouselExampleCaptions"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div
                  className="carousel-item active carousel-one text-center d-flex justify-content-center align-items-center"
                  data-bs-interval="2000"
                >
                  <div className="col-lg-6 col-md-10">
                    <div className="container">
                      <h1>Best Home Care & Services Provider</h1>
                      <p className="lead mt-3">
                        We create{" "}
                        <span className="text-warning">healthier</span>,{" "}
                        <span className="text-warning">happier</span> and{" "}
                        <span className="text-warning">fruitful</span> life for
                        the elderly.
                      </p>
                      <div className="mt-3">
                        <Link to="/services" className="btn btn-warning">
                          Services
                        </Link>
                        <Link
                          to="/contact"
                          className="btn btn-outline-warning mx-2"
                        >
                          Contact
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item carousel-two text-center d-flex justify-content-center align-items-center"
                  data-bs-interval="2000"
                >
                  <div className="col-lg-6 col-md-10">
                    <div className="container">
                      <h1>Best Home Care & Services Provider</h1>
                      <p className="lead mt-3">
                        We create{" "}
                        <span className="text-warning">healthier</span>,{" "}
                        <span className="text-warning">happier</span> and{" "}
                        <span className="text-warning">fruitful</span> life for
                        the elderly.
                      </p>
                      <div className="mt-3">
                        <Link to="/services" className="btn btn-warning">
                          Services
                        </Link>
                        <Link
                          to="/contact"
                          className="btn btn-outline-warning mx-2"
                        >
                          Contact
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item carousel-three text-center d-flex justify-content-center align-items-center"
                  data-bs-interval="2000"
                >
                  <div className="col-lg-6 col-md-10">
                    <div className="container">
                      <h1>Best Home Care & Services Provider</h1>
                      <p className="lead mt-3">
                        We create{" "}
                        <span className="text-warning">healthier</span>,{" "}
                        <span className="text-warning">happier</span> and{" "}
                        <span className="text-warning">fruitful</span> life for
                        the elderly.
                      </p>
                      <div className="mt-3">
                        <Link to="/services" className="btn btn-warning">
                          Services
                        </Link>
                        <Link
                          to="/contact"
                          className="btn btn-outline-warning mx-2"
                        >
                          Contact
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center">
            <img
              className="img-fluid text-center my-2"
              src="https://img.freepik.com/free-vector/flat-construction-template_23-2147740695.jpg?w=740&t=st=1703678148~exp=1703678748~hmac=0531f0775ce33c9e0784c3e3982fdc26ad632707b4bdba74ae3da4b96e8d9d2e"
              alt=""
            />
          </div>
        </main>
      </motion.div>
    </>
  );
};

export default transition(Home);
