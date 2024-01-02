import { HiOutlineMail, HiOutlineMailOpen } from "react-icons/hi";
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
                <div className="d-flex gap-1 flex-wrap justify-content-center mt-2">
                  <p className="small my-0" style={{ color: "#909090" }}>
                    <HiOutlineMail className="fs-3 text-warning" />{" "}
                    omojolagbehomecareservices1902@gmail.com
                  </p>
                  <p className="small my-0" style={{ color: "#909090" }}>
                    <HiOutlineMailOpen className="fs-3 text-warning" />{" "}
                    omojolagbegeriatriccarefoundat@gmail.com
                  </p>
                  <p className="small my-0" style={{ color: "#909090" }}>
                    <MdPhoneInTalk className="fs-3 text-warning" />
                    +2348057015681 / +2348147551902
                  </p>
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
