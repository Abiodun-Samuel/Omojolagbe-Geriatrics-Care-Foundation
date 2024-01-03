import CarouselItem from "../common/CarouselItem";

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
            <CarouselItem />
          </div>
          <div
            className="carousel-item carousel-two text-center d-flex justify-content-center align-items-center"
            data-bs-interval="2000"
          >
            <CarouselItem />
          </div>
          <div
            className="carousel-item carousel-three text-center d-flex justify-content-center align-items-center"
            data-bs-interval="2000"
          >
            <CarouselItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
