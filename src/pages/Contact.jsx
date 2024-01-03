import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneSquare } from "react-icons/fa";
import Breadcrump from "../components/common/Breadcrump";
import PageLayout from "../components/common/PageLayout";
import { MdPhoneInTalk } from "react-icons/md";
import { HiOutlineMail, HiOutlineMailOpen } from "react-icons/hi";

const Contact = () => {
  let pageTitle = "Contact";

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <>
      <PageLayout pageTitle={`${pageTitle} Us`}>
        <Breadcrump page={`${pageTitle} Us`}>
          <h1 className="text-light fw-bolder my-0 p-1 fs-1">
            <span className="text-warning">{pageTitle} </span> Us
          </h1>
        </Breadcrump>

        <section id="contact__page">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-5 shadow bg-white p-1">
                <div className="">
                  <h4 className="my-1 fs-4 fw-bolder text-dark">
                    Get In Touch
                  </h4>
                  <form>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                      className="form-control my-1"
                    />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="Email"
                      className="form-control my-1"
                    />
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="form-control my-1"
                    />
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className="form-control my-1"
                      placeholder="Message"
                      required
                      rows="5"
                    ></textarea>
                    <a
                      className="btn btn-primary mt-1 px-3"
                      href={`mailto:omojolagbegeriatriccarefoundat@gmail.com?subject=${encodeURI(
                        form.subject
                      )}&body=${encodeURI(
                        form.message
                      )}%0D%0A%0D%0ACheers%2C%0D%0AThank%20You`}
                    >
                      Send
                    </a>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 contact__page-details shadow p-1">
                <h4 className="my-1 fs-4 fw-bolder text-light">Contact Info</h4>

                <p className="small mt-5" style={{ color: "#909090" }}>
                  <FaLocationDot className="fs-3 text-warning" /> No 15, Akin
                  Alabi Street Welder B/S, Alakia-Isebo Road, Ibadan, Oyo state
                  Nigeria.
                </p>
                <p className="small" style={{ color: "#909090" }}>
                  <MdPhoneInTalk className="fs-3 text-warning" />
                  +2348057015681
                </p>
                <p className="small" style={{ color: "#909090" }}>
                  <FaPhoneSquare className="fs-3 text-warning" />
                  +2348147551902
                </p>
                <p className="small" style={{ color: "#909090" }}>
                  <HiOutlineMail className="fs-3 text-warning" />
                  omojolagbehomecareservices1902@gmail.com
                </p>
                <p className="small" style={{ color: "#909090" }}>
                  <HiOutlineMailOpen className="fs-3 text-warning" />
                  omojolagbegeriatriccarefoundat@gmail.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default Contact;
