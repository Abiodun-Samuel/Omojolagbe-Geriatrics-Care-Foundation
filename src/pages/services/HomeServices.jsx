import Breadcrump from "../../components/common/Breadcrump";
import PageLayout from "../../components/common/PageLayout";

const HomeServices = () => {
  let pageTitle = "Home";
  return (
    <PageLayout pageTitle={pageTitle}>
      <Breadcrump page={pageTitle}>
        <h1 className="text-light fw-bolder my-0 p-1 fs-1">
          <span className="text-warning">{pageTitle}</span> Services
        </h1>
      </Breadcrump>
      <section id="homeservices__page">
        <div className="container vh-100"></div>
      </section>
    </PageLayout>
  );
};

export default HomeServices;
