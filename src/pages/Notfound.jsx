import notFound from "../assets/images/404.jpg";
import transition from "../components/transition";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="vw-100 vh-100 d-flex flex-column gap-1 justify-content-center align-items-center">
      <img
        src={notFound}
        className="img-fluid shadow-sm rounded"
        alt="Page not found"
      />
      <Link to="/" className="btn btn-outline-primary">Home</Link>
    </div>
  );
};

export default transition(NotFound);
