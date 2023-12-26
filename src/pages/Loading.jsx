import loading from "../assets/images/loading.jpg";
import { Link } from "react-router-dom";
const Loading = () => {
  return (
    <div className="vw-100 vh-100 d-flex flex-column gap-1 justify-content-center align-items-center">
      <img
        src={loading}
        className="img-fluid shadow-sm rounded"
        alt="loading image"
      />
      <Link to="/" className="btn btn-outline-primary">Home</Link>
    </div>
  );
};

export default Loading;
