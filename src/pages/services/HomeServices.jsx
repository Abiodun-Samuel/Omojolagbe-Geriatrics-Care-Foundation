import { FaHandPointRight } from "react-icons/fa";
import Breadcrump from "../../components/common/Breadcrump";
import PageLayout from "../../components/common/PageLayout";
import about from "../../assets/images/img/about.png";

const HomeServices = () => {
  let pageTitle = "Home Care Services";
  return (
    <PageLayout pageTitle={pageTitle}>
      <Breadcrump page={pageTitle}>
        <h1 className="text-light fw-bolder my-0 p-1 fs-1">
          Home <span className="text-warning">Care</span>
        </h1>
      </Breadcrump>
      <section id="homeservices__page">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 mb-2">
              <div data-aos="fade-up">
                <img src={about} alt="construction" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 mb-2 d-flex align-items-center">
              <div>
                <h4 className="fw-bolder text-dark">
                  Omojolagbe Geriatric Home Care Services
                </h4>
                <p
                  style={{ lineHeight: 1.8 }}
                  data-aos="fade-up"
                  data-aos-delay="50"
                  className="text-dark my-2"
                >
                  Our Care home services play a pivotal role in ensuring the
                  well-being, safety, and quality of life of the elderly
                  population who may require additional support and care as they
                  age.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about__page-care py-3">
          <div className="container">
            <h3 className="fw-bolder text-center">
              Level{" "}
              <span className="bg-dark px-1 rounded text-warning">Of</span> Care
            </h3>
            <div className="row">
              <div data-aos="fade-up" className="col-lg-4 col-md-6">
                <div
                  data-aos="fade-up"
                  data-aos-delay="50"
                  className="border border-1 rounded shadow p-1 my-1"
                >
                  <p className="text-dark my-0 fw-bold">
                    <FaHandPointRight className="bg-black text-warning me-1 rounded fs-3" />
                    Free medical test.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="border border-1 rounded shadow p-1 my-1"
                >
                  <p className="text-dark my-0 fw-bold">
                    <FaHandPointRight className="bg-black text-warning me-1 rounded fs-3" />
                    Charity for the less priviledged.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="150"
                  className="border border-1 rounded shadow p-1 my-1"
                >
                  <p className="text-dark my-0 fw-bold">
                    <FaHandPointRight className="bg-black text-warning me-1 rounded fs-3" />
                    Residential care.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="border border-1 rounded shadow p-1 my-1"
                >
                  <p className="text-dark my-0 fw-bold">
                    <FaHandPointRight className="bg-black text-warning me-1 rounded fs-3" />
                    Nursing care.
                  </p>
                </div>
              </div>
              <div data-aos="fade-up" className="col-lg-4 col-md-6">
                <div
                  data-aos="fade-up"
                  data-aos-delay="50"
                  className="border border-1 rounded shadow p-1 my-1"
                >
                  <p className="text-dark my-0 fw-bold">
                    <FaHandPointRight className="bg-black text-warning me-1 rounded fs-3" />
                    Respite care.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="border border-1 rounded shadow p-1 my-1"
                >
                  <p className="text-dark my-0 fw-bold">
                    <FaHandPointRight className="bg-black text-warning me-1 rounded fs-3" />
                    Palliative care.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="150"
                  className="border border-1 rounded shadow p-1 my-1"
                >
                  <p className="text-dark my-0 fw-bold">
                    <FaHandPointRight className="bg-black text-warning me-1 rounded fs-3" />
                    Physiotherapy.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="border border-1 rounded shadow p-1 my-1"
                >
                  <p className="text-dark my-0 fw-bold">
                    <FaHandPointRight className="bg-black text-warning me-1 rounded fs-3" />
                    Dementia care.
                  </p>
                </div>
              </div>
              <div data-aos="fade-up" className="col-lg-4 col-md-6">
                <div
                  data-aos="fade-up"
                  data-aos-delay="50"
                  className="border border-1 rounded shadow p-1 my-1"
                >
                  <p className="text-dark my-0 fw-bold">
                    <FaHandPointRight className="bg-black text-warning me-1 rounded fs-3" />
                    Day care.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="border border-1 rounded shadow p-1 my-1"
                >
                  <p className="text-dark my-0 fw-bold">
                    <FaHandPointRight className="bg-black text-warning me-1 rounded fs-3" />
                    Counseling.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="150"
                  className="border border-1 rounded shadow p-1 my-1"
                >
                  <p className="text-dark my-0 fw-bold">
                    <FaHandPointRight className="bg-black text-warning me-1 rounded fs-3" />
                    Recreation.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="border border-1 rounded shadow p-1 my-1"
                >
                  <p className="text-dark my-0 fw-bold">
                    <FaHandPointRight className="bg-black text-warning me-1 rounded fs-3" />
                    Training of caregivers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HomeServices;
