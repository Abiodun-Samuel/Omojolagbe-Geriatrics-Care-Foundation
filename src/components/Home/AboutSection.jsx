import SectionHeader from "../common/SectionHeader";
import aboutImageMain from "../../assets/images/img/about.jpg";
import { FaHandsHelping } from "react-icons/fa";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { RiServiceFill } from "react-icons/ri";
import { GrBusinessService } from "react-icons/gr";
import { Link } from "react-router-dom";

const AboutComponent = () => {
  return (
    <section id="about__section">
      <div className="container">
        <SectionHeader>
          <h2 className="text-light my-0 py-0">
            About <span className="text-warning">Us</span>
          </h2>
        </SectionHeader>
        <div
          data-aos="fade-up"
          className="row d-flex justify-content-center my-2"
        >
          <div className="col-lg-8 text-center">
            <p className="text-dark text-dark">
              Omojolagbe Geriatrics Care Foundation was established in 2018 in
              Ibadan, Oyo State Nigeria and fully registered by The Corporate
              Affairs Commission. It is a reputable organization working in the
              way of creating healthier, happier and fruitful life for the aged.
              We have impacted the lives of over 1000 elderly people in Ibadan
              and Nigeria in general.
            </p>
            <Link
              to={"/about"}
              className="btn btn-outline-primary rounded-pill"
            >
              Read More &#8594;
            </Link>
          </div>
        </div>

        <div className="row mt-3 d-flex justify-content-center">
          <div data-aos="fade-up" className="col-lg-6 mb-2 ">
            <div className="about__image">
              <img
                src={aboutImageMain}
                alt="about us"
                className="img-thumbnail shadow rounded"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="about__obj py-5">
        <div className="container py-5">
          <div className="row d-flex justify-content-center py-2">
            <div className="col-lg-4 col-md-6 d-flex flex-column">
              <div
                data-aos="fade-up"
                className="d-flex my-2 rounded border border-1 p-1"
              >
                <div>
                  <FaHandsHelping className="fs-1 text-warning me-1" />
                </div>
                <p className="small my-0 text-light">
                  We provide high quality health care services that are
                  efficient and supportive to the elderly persons.
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="50"
                className="d-flex my-2 rounded border border-1 p-1"
              >
                <div>
                  <LiaHandsHelpingSolid className="fs-1 text-warning me-1" />
                </div>
                <p className="small my-0 text-light">
                  We use all our efforts in taking care of the aged so as to
                  regain their independence and active ageing.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex flex-column">
              <div
                data-aos-delay="100"
                data-aos="fade-up"
                className="d-flex my-2 rounded border border-1 p-1"
              >
                <div>
                  <RiServiceFill className="fs-1 text-warning me-1" />
                </div>
                <p className="small my-0 text-light">
                  We conduct empowerment program for the vulnerable among the
                  elderly.
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="d-flex my-2 rounded border border-1 p-1"
              >
                <div>
                  <GrBusinessService className="fs-1 text-warning me-1" />
                </div>
                <p className="small my-0 text-light">
                  We collaborate with relevant organizations within and outside
                  the country also to provide support and structure for the
                  elderly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
