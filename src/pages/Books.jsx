import transition from "../components/transition";
import Breadcrump from "../components/common/Breadcrump";
import { books } from "../utils/data";
import HelmetComponent from "../components/common/Helmet";

const Books = () => {
  return (
    <section id="about">
      <HelmetComponent pageTitle="Samuel Ayinde | Books" />
      <div className="container">
        <Breadcrump page="Books" />

        <div className="row my-3">
          {books.map((book, index) => (
            <div
              key={book.title + index}
              className="col-lg-3 col-md-6 col-sm-6 mb-2 d-flex align-items-stretch"
            >
              <div className="card">
                <img
                  src={book.img_url}
                  className="card-img-top"
                  alt={book.title}
                />
                <div className="card-body">
                  <small>{book.dop}</small>
                  <a href={book.url} target="_blank">
                    <h5 className="card-title text-primary fw-bold">
                      {book.title}
                    </h5>
                  </a>
                  <p className="card-text">
                    {book.description.substring(0, 100)}...
                  </p>
                  <div className="d-flex gap-1 flex-wrap">
                    <span>Formats: </span>
                    {book?.format?.map((format, index) => (
                      <a key={index} target="_blank" href={format.url}>
                        {format.type}
                      </a>
                    ))}
                  </div>
                  <hr />
                  <div className="d-flex gap-1 flex-wrap">
                    <span>Pages: </span>
                    <em className="fst-italic">{book.pages}</em>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default transition(Books);
