import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HelmetComponent from "./Helmet";
import PropTypes from "prop-types";

const PageLayout = ({ children, pageTitle }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <>
      <HelmetComponent
        pageTitle={`${pageTitle} | OMOJOLAGBE GERIATRICS CARE FOUNDATION`}
      />

      <motion.div
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 0 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
      >
        {children}
      </motion.div>
    </>
  );
};

PageLayout.propTypes = {
  children: PropTypes.any,
  pageTitle: PropTypes.string.isRequired,
};
export default PageLayout;
