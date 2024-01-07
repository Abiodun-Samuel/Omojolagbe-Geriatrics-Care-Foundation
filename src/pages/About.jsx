import Breadcrump from "../components/common/Breadcrump";
import PageLayout from "../components/common/PageLayout";
import about from "../assets/images/img/about.png";
import donor from "../assets/images/icons/donor.svg";
import wheelchair from "../assets/images/icons/wheelchair.svg";
import ambulance from "../assets/images/icons/ambulance.svg";
import building from "../assets/images/icons/hospital.svg";
import { FaPodcast } from "react-icons/fa";
import { PiTargetBold } from "react-icons/pi";
import { GiTargeted } from "react-icons/gi";

const About = () => {
  let pageTitle = "About";
  return (
    <PageLayout pageTitle={`${pageTitle} Us`}>
      <Breadcrump page={`${pageTitle} Us`}>
        <h1 className="text-light fw-bolder my-0 p-1 fs-1">
          {pageTitle} <span className="text-warning">Us</span>
        </h1>
      </Breadcrump>
      <section id="about__page">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 mb-2">
              <div data-aos="fade-up">
                <img src={about} alt="construction" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 mb-2 d-flex align-items-center">
              <div>
                <p
                  style={{ lineHeight: 1.8 }}
                  data-aos="fade-up"
                  data-aos-delay="50"
                  className="text-dark"
                >
                  <b>Omojolagbe Geriatric Care Foundation</b> was established in
                  2018 in Ibadan, Oyo State Nigeria with CAC Cert. No: 191574.
                  It is a reputable organization working in the way of creating
                  healthier, happier and fruitful life for the aged. We have
                  impacted the lives of over 1000 elderly people in Ibadan and
                  Nigeria in general.
                </p>
                <hr />
                <p
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="text-dark"
                >
                  <FaPodcast className="bg-dark text-warning fs-4 me-1 rounded" />
                  To provide high quality health care services that are
                  efficient and supportive to the elderly persons.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-delay="150"
                  className="text-dark"
                >
                  <FaPodcast className="bg-dark text-warning fs-4 me-1 rounded" />
                  To use all our efforts in taking care of the aged so as to
                  regain their independence and active ageing.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="text-dark"
                >
                  <FaPodcast className="bg-dark text-warning fs-4 me-1 rounded" />
                  To do empowerment program for the vulnerable among the
                  elderly.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-delay="250"
                  className="text-dark"
                >
                  <FaPodcast className="bg-dark text-warning fs-4 me-1 rounded" />
                  To collaborate with relevant organizations within and outside
                  the country also to provide support and structure for the
                  elderly.
                </p>
                <hr />
                <p
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="text-dark"
                >
                  For Senior Citizens, Disabled Family Members, Men & Women 50
                  years and above.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="about__page-mission shadow rounded my-2"
        >
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 col-md-6 my-2 d-flex align-items-stretch">
                <div
                  data-aos="fade-up"
                  data-aos-delay="50"
                  className="text-center p-1 shadow rounded border border-1"
                >
                  <PiTargetBold className="fs-3 text-warning" />
                  <h4 className="fw-bolder my-1 text-light">Our Mission</h4>
                  <p style={{ color: "#909090" }}>
                    To create awareness for the elderly on how to age gracefully
                    through sensitizing programs on the media, seminars and
                    conferences.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 my-2 d-flex align-items-stretch">
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="text-center p-1 shadow rounded border border-1"
                >
                  <GiTargeted className="fs-3 text-warning" />
                  <h4 className="fw-bolder my-1 text-light">Our Vision</h4>
                  <p style={{ color: "#909090" }}>
                    A society free of sickness, disease and untimely death among
                    the elderly people.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about__page-needs my-5">
          <div className="container text-center">
            <h3 className="fw-bolder mb-3">
              <span className="bg-dark px-1 rounded text-warning">Our</span>{" "}
              Needs
            </h3>
            <div className="row">
              <div data-aos="fade-up" className="col-lg-3 col-md-6">
                <div data-aos="fade-up" className="my-1 text-center">
                  <img
                    src={donor}
                    alt="donor"
                    width="150"
                    height="150"
                    className="border border-2 shadow rounded-circle"
                  />
                  <p className="text-dark my-1 fw-bold">Donors.</p>
                </div>
              </div>
              <div data-aos="fade-up" className="col-lg-3 col-md-6">
                <div
                  data-aos="fade-up"
                  data-aos-delay="50"
                  className="my-1 text-center"
                >
                  <img
                    src={wheelchair}
                    alt="wheelchair"
                    width="150"
                    height="150"
                    className="border border-2 shadow rounded-circle"
                  />
                  <p className="text-dark my-1 fw-bold">
                    Wheel chairs, crutches, and walkers for disabled old people.
                  </p>
                </div>
              </div>
              <div data-aos="fade-up" className="col-lg-3 col-md-6">
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="my-1 text-center"
                >
                  <img
                    src={ambulance}
                    alt="ambulance"
                    width="150"
                    height="150"
                    className="border border-2 shadow rounded-circle"
                  />
                  <p className="text-dark my-1 fw-bold">An ambulance.</p>
                </div>
              </div>
              <div data-aos="fade-up" className="col-lg-3 col-md-6">
                <div
                  data-aos="fade-up"
                  data-aos-delay="150"
                  className="my-1 text-center"
                >
                  <img
                    src={building}
                    alt="land and building"
                    width="150"
                    height="150"
                    className="border border-2 shadow rounded-circle"
                  />
                  <p className="text-dark my-1 fw-bold">Land and Building.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
