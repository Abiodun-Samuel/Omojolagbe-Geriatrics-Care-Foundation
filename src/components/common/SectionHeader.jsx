const SectionHeader = ({ children }) => {
  return <div id="section__header" className="text-center p-1">{children}</div>;
};
import PropTypes from "prop-types";
SectionHeader.propTypes = {
  children: PropTypes.element,
};
export default SectionHeader;
