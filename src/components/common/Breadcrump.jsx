import { Link } from "react-router-dom";
const Breadcrump = ({ page }) => {
  return (
    <section className="inner">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 p-1 rounded text-center">
            <h1 className="text-white fs-1">{page}</h1>
            <p>
              <Link className="text-secondary" to="/">
                Home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrump;
