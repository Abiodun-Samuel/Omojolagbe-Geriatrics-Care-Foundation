import { Helmet, HelmetProvider } from "react-helmet-async";

const HelmetComponent = ({ pageTitle }) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
      </HelmetProvider>
    </>
  );
};

export default HelmetComponent;
