import Breadcrump from "../../components/common/Breadcrump";
import PageLayout from "../../components/common/PageLayout";
import construction from "../../assets/images/img/construction.jpg";

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
        <div className="container vh-100">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4">
              <img
                src={construction}
                alt="construction"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HomeServices;
