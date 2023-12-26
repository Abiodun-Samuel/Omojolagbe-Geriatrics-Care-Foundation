import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { AiOutlineProfile } from "react-icons/ai";
import { BsBook, BsMusicNoteBeamed } from "react-icons/bs";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer p-1 text-center">
              <div className="d-flex gap-3 justify-content-center align-items-center mb-1">
                <Link className="text-light d-flex align-items-center" to={"/"}>
                  <AiFillHome />
                </Link>
                <Link
                  className="text-light d-flex align-items-center"
                  to={"/about"}
                >
                  <AiOutlineProfile />
                </Link>
                <Link className="text-light d-flex align-items-center" to={"/books"}>
                  <BsBook />
                </Link>
                {/* <Link className="text-light d-flex align-items-center" to={"/songs"}>
                  <BsMusicNoteBeamed />
                </Link> */}
                <Link className="text-light d-flex align-items-center" to={"/contact"}>
                  <FaRegAddressCard />
                </Link>
              </div>
              <p className="m-0 p-0 text-light small fw-light">
                Copyright © {year} Samuel Ayinde, All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
