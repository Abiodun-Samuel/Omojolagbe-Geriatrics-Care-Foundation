import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Breadcrump = ({ page, children }) => {
  return (
    <div className="text-center" id="page_header">
      {children}
      <p className="mt-1">
        <Link className="text-primary fw-bold" to="/">
          Home
        </Link>{" "}
        / <span>{page}</span>
      </p>
    </div>
  );
};

Breadcrump.propTypes = {
  page: PropTypes.string,
  children: PropTypes.element,
};

export default Breadcrump;
