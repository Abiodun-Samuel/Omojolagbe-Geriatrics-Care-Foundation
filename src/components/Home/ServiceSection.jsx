import imageOne from "../../assets/images/img/image1.png";
import imageTwo from "../../assets/images/img/image2.png";
import SectionHeader from "../common/SectionHeader";
const ServiceSection = () => {
  return (
    <section id="service__section">
      <div className="container-sm">
        <div className="row ">
          <div data-aos="fade-up" className="col-lg-6 mb-1">
            <img src={imageOne} alt="service image" className="img-fluid" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            className="col-lg-6 d-flex align-items-center mb-1"
          >
            <div>
              <SectionHeader>
                <h2 className="text-light my-0 py-0">
                  Personal <span className="text-warning">Care</span>
                </h2>
              </SectionHeader>
              <p className="mt-2 text-center lead">
                At Omojolagbe Geriatrics Care Foundation, we understand the
                unique needs and challenges that come with aging. Our mission is
                to provide compassionate and reliable personal care services
                tailored specifically for seniors, ensuring a life of dignity,
                comfort, and independence.
              </p>
              <p className="text-center lead">
                We provide a Comprehensive Personal Assistance: From bathing,
                grooming, and dressing to medication reminders and mobility
                assistance, our caregivers are trained to offer support with the
                utmost respect and empathy.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="col-lg-6 d-flex align-items-center mb-1"
          >
            <div>
              <SectionHeader>
                <h2 className="text-light my-0 py-0">
                  Quality Of <span className="text-warning">Life</span>
                </h2>
              </SectionHeader>
              <p className="mt-2 text-center lead">
                At Omojolagbe Geriatrics Care Foundation, we`re dedicated to
                providing more than just care; were committed to enhancing
                qualify of lives. Our trained caregivers engage seniors in
                meaningful activities, conversations, and outings to foster
                emotional well-being and social interactions.
              </p>
              <p className="mt-2 text-center lead">
                Life is meant to be lived fully at every age. Our center is a
                vibrant hub of activities like arts, crafts and games. There`s
                always something enriching happening here.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="col-lg-6 mb-1 text-center "
          >
            <img src={imageTwo} alt="service image" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
