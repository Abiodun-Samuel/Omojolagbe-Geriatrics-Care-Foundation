import Breadcrump from "../components/common/Breadcrump";
import HelmetComponent from "../components/common/Helmet";
import transition from "../components/transition";

const Blogs = () => {
  return (
    <section id="blogs">
      <HelmetComponent pageTitle="Samuel Ayinde | Blogs" />
      <div className="container">
        <Breadcrump page="Blogs" />

        <div className="row d-flex justify-content-center my-2">
          <div className="col-lg-6">
            <img
              className="img-fluid"
              src="https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=996&t=st=1698445162~exp=1698445762~hmac=c8ecd293dd95b7ee94e1a0d7f18321cc44493413ee405875e1184b09ba7d8fd7"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default transition(Blogs);
