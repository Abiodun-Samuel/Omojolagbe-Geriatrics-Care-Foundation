import React from 'react';
const SectionHeader = ({ children }) => {
  return <div id="section__header">{children}</div>;
};
SectionHeader.propTypes = {
  children: React.ReactNode,
};

export default SectionHeader;
