import { Link } from "react-router-dom";

const CarouselItem = () => {
  return (
    <div className="col-lg-6 col-md-10">
      <div className="container">
        <h1>Best Home Care & Services Provider</h1>
        <p className="lead mt-3">
          We create <span className="text-warning">healthier</span>,{" "}
          <span className="text-warning">happier</span> and{" "}
          <span className="text-warning">fruitful</span> life for the elderly.
        </p>
        <div className="mt-3">
          <Link to="/about" className="btn btn-warning rounded-pill">
            Learn More &#8594;
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
  );
};

export default CarouselItem;
