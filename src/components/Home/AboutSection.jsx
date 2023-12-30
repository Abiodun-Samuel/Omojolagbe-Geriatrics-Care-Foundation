import SectionHeader from "../common/SectionHeader";
import aboutImageMain from "../../assets/images/img/about.jpg";
import { FaHandsHelping } from "react-icons/fa";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { RiServiceFill } from "react-icons/ri";
import { GrBusinessService } from "react-icons/gr";

const AboutComponent = () => {
  return (
    <section id="about__section">
      <div className="container">
        <SectionHeader>
          <h2 className="text-light my-0 py-0">
            About <span className="text-warning">Us</span>
          </h2>
        </SectionHeader>
        <div className="row d-flex justify-content-center my-3">
          <div className="col-lg-9 text-center">
            <p className="lead">
              Omojolagbe Geriatrics Care Foundation was established in 2018 in
              Ibadan, Oyo State Nigeria and fully registered by The Corporate
              Affairs Commission. It is a reputable organization working in the
              way of creating healthier, happier and fruitful life for the aged.
              We have impacted the lives of over 1000 elderly people in Ibadan
              and Nigeria in general.
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-center my-3">
          <div className="col-lg-6">
            <div className="about__image">
              <img
                src={aboutImageMain}
                alt="about us"
                className="img-thumbnail shadow rounded"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6 my-2 d-flex align-items-stretch">
            <div className="about__text text-center p-1 shadow rounded border border-1 border-dark">
              <FaHandsHelping className="bg-dark rounded fs-1 text-warning" />
              <p className="fw-normal mt-1">
                We provide high quality health care services that are efficient
                and supportive to the elderly persons.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 my-2 d-flex align-items-stretch">
            <div className="about__text text-center p-1 shadow rounded border border-1 border-dark">
              <LiaHandsHelpingSolid className="bg-dark rounded fs-1 text-warning" />
              <p className="fw-normal mt-1">
                We use all our efforts in taking care of the aged so as to
                regain their independence and active ageing.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 my-2 d-flex align-items-stretch">
            <div className="about__text text-center p-1 shadow rounded border border-1 border-dark">
              <RiServiceFill className="bg-dark rounded fs-1 text-warning" />
              <p className="fw-normal mt-1">
                We conduct empowerment program for the vulnerable among the
                elderly.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 my-2 d-flex align-items-stretch">
            <div className="about__text text-center p-1 shadow rounded border border-1 border-dark">
              <GrBusinessService className="bg-dark rounded fs-1 text-warning" />
              <p className="fw-normal mt-1">
                We collaborate with relevant organizations within and outside
                the country also to provide support and structure for the
                elderly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
