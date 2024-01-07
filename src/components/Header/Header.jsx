import { FaRegAddressCard } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { GrGallery, GrServices } from "react-icons/gr";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineProfile } from "react-icons/ai";
import logo from "../../assets/images/logo/logo-md.png";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg shadow position-fixed w-100 top-0">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="logo" width="60" />
          </NavLink>
          <button
            className="btn btn-outline-warning p-0 d-lg-none d-flex align-items-center"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <CgMenuGridR className="fs-1" />
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto">
              <li className="nav-item me-5 my-sm-1 my-1 my-lg-0">
                <NavLink
                  className="nav-NavLink  d-flex align-items-center rounded-pill"
                  aria-current="page"
                  to="/"
                >
                  <AiFillHome style={{ marginRight: "5px" }} /> Home
                </NavLink>
              </li>
              <li className="nav-item me-5 my-sm-1 my-1 my-lg-0">
                <NavLink
                  className="nav-NavLink d-flex align-items-center rounded-pill"
                  to="/about"
                >
                  <AiOutlineProfile style={{ marginRight: "5px" }} />
                  About
                </NavLink>
              </li>
              <li className="nav-item dropdown me-5 my-sm-1 my-1 my-lg-0">
                <a
                  className="nav-NavLink d-flex align-items-center dropdown-toggle rounded-pill"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <GrServices style={{ marginRight: "5px" }} /> Services
                </a>
                <ul className="dropdown-menu">
                  {/* <li>
                    <Link
                      to={"/service/care-foundation"}
                      className="dropdown-item"
                    >
                      Omojolagbe Geriatric Care Foundation
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      to={"/service/home-care-services"}
                      className="dropdown-item"
                    >
                      Omojolagbe Home Care Services
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item me-5 my-sm-1 my-1 my-lg-0">
                <NavLink
                  className="nav-NavLink d-flex align-items-center rounded-pill"
                  to="/gallery"
                >
                  <GrGallery style={{ marginRight: "5px" }} />
                  Gallery
                </NavLink>
              </li>

              <li className="nav-item me-5 my-sm-1 my-1 my-lg-0">
                <NavLink
                  className="nav-NavLink d-flex align-items-center rounded-pill"
                  to="/contact"
                >
                  <FaRegAddressCard style={{ marginRight: "5px" }} /> Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
