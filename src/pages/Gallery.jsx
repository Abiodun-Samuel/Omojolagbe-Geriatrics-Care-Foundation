import Breadcrump from "../components/common/Breadcrump";
import HelmetComponent from "../components/common/Helmet";

const Gallery = () => {
  return (
    <section id="about">
      <HelmetComponent pageTitle="Samuel Ayinde | Songs" />
      <div className="container vh-100">
        <Breadcrump page="All Songs" />
      </div>
    </section>
  );
};

export default Gallery;
