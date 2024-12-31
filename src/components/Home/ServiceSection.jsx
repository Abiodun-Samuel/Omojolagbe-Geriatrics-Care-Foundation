import imageOne from "../../assets/images/img/image1.png";
import imageTwo from "../../assets/images/img/image2.png";
import arrow from "../../assets/images/img/arrow-right.png";
import SectionHeader from "../common/SectionHeader";
const ServiceSection = () => {
  return (
    <section id="service__section">
      <div className="container">
        <div className="row">
          <div
            data-aos="fade-up"
            className="col-lg-6 mb-3  d-flex align-items-center"
          >
            <img src={imageOne} alt="service image" className="img-fluid" />
            <img
              style={{
                transform: "scaleX(-1)",
                WebkitTransform: "scaleX(-1)",
              }}
              className="d-none d-lg-block"
              src={arrow}
              alt="service image"
              height={150}
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="col-lg-6 mb-3 d-flex align-items-center "
          >
            <div>
              <SectionHeader>
                <h2 className="text-light my-0 py-0">
                  Personal <span className="text-warning">Care</span>
                </h2>
              </SectionHeader>
              <p className="my-2 text-dark text-center">
                At Omojolagbe Geriatric Care Foundation, we understand the
                unique needs and challenges that come with aging. Our mission is
                to provide compassionate and reliable personal care services
                tailored specifically for seniors, ensuring a life of dignity,
                comfort, and independence.
              </p>
              <p className="text-dark text-center">
                We provide a Comprehensive Personal Assistance: From bathing,
                grooming, and dressing to medication reminders and mobility
                assistance, our caregivers are trained to offer support with the
                utmost respect and empathy.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            data-aos="fade-up"
            className="col-lg-6 mb-3 d-flex align-items-center order-lg-1 order-2"
          >
            <div>
              <SectionHeader>
                <h2 className="text-light my-0 py-0">
                  Quality Of <span className="text-warning">Life</span>
                </h2>
              </SectionHeader>
              <p className="my-2 text-dark text-center">
                At Omojolagbe Care Foundation, we`re dedicated to providing more
                than just care; were committed to enhancing qualify of lives.
                Our trained caregivers engage seniors in meaningful activities,
                conversations, and outings to foster emotional well-being and
                social interactions.
              </p>
              <p className="my-2 text-dark text-center">
                Life is meant to be lived fully at every age. Our center is a
                vibrant hub of activities like arts, crafts and games. There`s
                always something enriching happening here.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="col-lg-6 mb-3 text-end d-flex align-items-center order-lg-2 order-1"
          >
            <img
              className="d-none d-lg-block"
              src={arrow}
              alt="service image"
              height={150}
            />
            <img src={imageTwo} alt="service image" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
