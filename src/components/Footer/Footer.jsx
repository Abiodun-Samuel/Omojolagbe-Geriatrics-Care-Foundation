import { Link } from "react-router-dom";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { MdLocationOn, MdPhoneInTalk } from "react-icons/md";
import logo from "../../assets/images/logo/logo-md.png";
import { HiOutlineMail, HiOutlineMailOpen } from "react-icons/hi";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-lg-4 col-md-6 my-1">
                <div className="rounded shadow-sm">
                  <img src={logo} alt="logo" />
                  <p className="mt-1 small" style={{ lineHeight: "1.75" }}>
                    Omojolagbe Geriatrics Care Foundation was established in
                    2018 in Ibadan, Oyo State Nigeria and fully registered by
                    The Corporate Affairs Commission. It is a reputable
                    organization working in the way of creating healthier,
                    happier and fruitful life for the aged.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 my-1">
                <div className="footer-links shadow rounded border border-warning">
                  <h4>Useful Links</h4>
                  <Link to={"/"} className="d-block my-1 small">
                    <VscDebugBreakpointLogUnverified /> Home
                  </Link>
                  <Link to={"/about"} className="d-block my-1 small">
                    <VscDebugBreakpointLogUnverified /> About
                  </Link>
                  <Link to={"/gallery"} className="d-block my-1 small">
                    <VscDebugBreakpointLogUnverified /> Gallery
                  </Link>
                  <Link to={"/contact"} className="d-block my-1 small">
                    <VscDebugBreakpointLogUnverified /> Contact
                  </Link>
                  <Link to={"/services"} className="d-block my-1 small">
                    <VscDebugBreakpointLogUnverified /> Services
                  </Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 my-1 ">
                <div className="footer-contact shadow">
                  <h4>Contact Us</h4>
                  <p className="small mt-1">
                    <MdLocationOn className="fs-3 text-warning" /> No 15, Akin
                    Alabi Street Welder B/S, Alakia-Isebo Road, Ibadan, Oyo
                    state Nigeria.
                  </p>
                  <p className="small">
                    <MdPhoneInTalk className="fs-3 text-warning" />
                    +2348057015681 / +2348147551902
                  </p>
                  <p className="small">
                    <HiOutlineMail className="fs-3 text-warning" />{" "}
                    omojolagbehomecareservices1902@gmail.com
                  </p>
                  <p className="small">
                    <HiOutlineMailOpen className="fs-3 text-warning" />{" "}
                    omojolagbegeriatriccarefoundat@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="footer-bottom text-center">
            <p className="small my-0">
              Copyright &copy; <span id="year">{year}.</span> {""}
              <span className="fw-bold">
                OMOJOLAGBE GERIATRICS CARE FOUNDATION
              </span>
              , All Rights Reserved.
            </p>
            <p className="small my-0">
              Designed & Developed by{" "}
              <a
                href="https://abiodunsamuel.com"
                target="_blank"
                rel="noreferrer"
                className="fw-bold text-light"
              >
                Abiodun Digital Hub
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
