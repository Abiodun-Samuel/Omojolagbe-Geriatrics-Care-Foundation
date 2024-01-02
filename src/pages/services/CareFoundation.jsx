import Breadcrump from "../../components/common/Breadcrump";
import PageLayout from "../../components/common/PageLayout";
import construction from "../../assets/images/img/construction.jpg";


const CareFoundation = () => {
  let pageTitle = "Care";
  return (
    <PageLayout pageTitle={`${pageTitle} Foundation`}>
      <Breadcrump page={`${pageTitle} Foundation`}>
        <h1 className="text-light fw-bolder my-0 p-1 fs-1">
          <span className="text-warning">{pageTitle}</span> Foundation
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

export default CareFoundation;
