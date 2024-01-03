import { HiOutlineMail, HiOutlineMailOpen } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import SectionHeader from "../common/SectionHeader";
import { MdPhoneInTalk } from "react-icons/md";

const ContactSection = () => {
  return (
    <section id="contact__section">
      <div className="container">
        <div
          data-aos="fade-up"
          className="contact__section-box rounded shadow p-1"
        >
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <SectionHeader>
                <h2 className="text-light my-0 py-0">
                  Contact <span className="text-warning">Us</span>
                </h2>
              </SectionHeader>
              <div className="my-2 text-center">
                <p className="text-light">
                  We`re committed to providing compassionate care and valuable
                  resources for seniors and their families. If you have
                  questions, need assistance, or simply want to connect, our
                  team is ready to help.
                </p>
                <div className="d-flex gap-1 flex-column flex-wrap justify-content-center mt-2">
                  <a
                    className="small my-0"
                    style={{ color: "#909090", textDecoration: "underline" }}
                    href="mailto:omojolagbehomecareservices1902@gmail.com"
                  >
                    <HiOutlineMail
                      className="fs-3 text-warning"
                      style={{ marginRight: "3px" }}
                    />
                    omojolagbehomecareservices1902@gmail.com
                  </a>
                  <a
                    href="mailto:omojolagbegeriatriccarefoundat@gmail.com"
                    className="small my-0"
                    style={{ color: "#909090", textDecoration: "underline" }}
                  >
                    <HiOutlineMailOpen
                      className="fs-3 text-warning"
                      style={{ marginRight: "3px" }}
                    />{" "}
                    omojolagbegeriatriccarefoundat@gmail.com
                  </a>
                  <a
                    href="tel:+2348057015681"
                    className="small my-0"
                    style={{ color: "#909090", textDecoration: "underline" }}
                  >
                    <MdPhoneInTalk
                      className="fs-3 text-warning"
                      style={{ marginRight: "3px" }}
                    />
                    +2348057015681
                  </a>
                  <a
                    href="tel:+2348147551902"
                    className="small my-0"
                    style={{ color: "#909090", textDecoration: "underline" }}
                  >
                    <MdPhoneInTalk
                      className="fs-3 text-warning"
                      style={{ marginRight: "3px" }}
                    />
                    +2348147551902
                  </a>
                  <a
                    href="https://web.facebook.com/profile.php?id=100081814689135"
                    className="small my-0"
                    style={{ color: "#909090", textDecoration: "underline" }}
                  >
                    <FaFacebook
                      className="fs-3 text-warning"
                      style={{ marginRight: "3px" }}
                    />
                    Connect with us on Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
