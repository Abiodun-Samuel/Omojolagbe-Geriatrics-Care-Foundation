import { Link } from "react-router-dom";

const HeroComponent = () => {
  return (
    <section id="hero__section">
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div
            className="carousel-item active carousel-one text-center d-flex justify-content-center align-items-center"
            data-bs-interval="2000"
          >
            <div className="col-lg-6 col-md-10">
              <div className="container">
                <h1>Best Home Care & Services Provider</h1>
                <p className="lead mt-3">
                  We create <span className="text-warning">healthier</span>,{" "}
                  <span className="text-warning">happier</span> and{" "}
                  <span className="text-warning">fruitful</span> life for the
                  elderly.
                </p>
                <div className="mt-3">
                  <Link to="/services" className="btn btn-warning rounded-pill">
                    Services
                  </Link>
                  <Link to="/contact" className="btn btn-outline-warning mx-2 rounded-pill">
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
                  We create <span className="text-warning">healthier</span>,{" "}
                  <span className="text-warning">happier</span> and{" "}
                  <span className="text-warning">fruitful</span> life for the
                  elderly.
                </p>
                <div className="mt-3">
                  <Link to="/services" className="btn btn-warning rounded-pill">
                    Services
                  </Link>
                  <Link to="/contact" className="btn btn-outline-warning mx-2 rounded-pill">
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
                  We create <span className="text-warning">healthier</span>,{" "}
                  <span className="text-warning">happier</span> and{" "}
                  <span className="text-warning">fruitful</span> life for the
                  elderly.
                </p>
                <div className="mt-3">
                  <Link to="/services" className="btn btn-warning rounded-pill">
                    Services
                  </Link>
                  <Link
                    to="/contact"
                    className="btn btn-outline-warning mx-2 rounded-pill"
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
  );
};

export default HeroComponent;
