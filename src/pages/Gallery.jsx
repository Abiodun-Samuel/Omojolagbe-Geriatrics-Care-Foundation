import Breadcrump from "../components/common/Breadcrump";
import PageLayout from "../components/common/PageLayout";

const Gallery = () => {
  let pageTitle = "Gallery";
  return (
    <PageLayout pageTitle={pageTitle}>
      <Breadcrump page={pageTitle}>
        <h1 className="text-light fw-bolder my-0 p-1 fs-1">
          <span className="text-warning">{pageTitle}</span>
        </h1>
      </Breadcrump>
      <section id="gallery__page">
        <div className="container vh-100"></div>
      </section>
    </PageLayout>
  );
};

export default Gallery;
