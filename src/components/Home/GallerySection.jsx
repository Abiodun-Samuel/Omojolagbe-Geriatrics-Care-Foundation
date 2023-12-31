import { Link } from "react-router-dom";
import gallery from "../../assets/images/img/gallery_intro.jpg";
import SectionHeader from "../common/SectionHeader";
import { FaPodcast } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
const GallerySection = () => {
  return (
    <section id="gallery__section">
      <div className="container">
        <SectionHeader>
          <h2 className="text-light my-0 py-0">
            <span className="text-warning">Gallery</span>
          </h2>
        </SectionHeader>
        <div className="row mt-3">
          <div
            data-aos="fade-up"
            className="col-lg-6 mb-1 d-flex align-items-center"
          >
            <div className="gallery__section">
              <div className="bg-white rounded shadow-sm p-1 mb-1 d-flex gap-1 align-items-start">
                <div>
                  <p
                    style={{ padding: "4px", background: "#eae8f6" }}
                    title="Gallery"
                    className="rounded-circle shadow border-2 border btn btn-md btn-outline-primary"
                  >
                    <FaPodcast />
                  </p>
                </div>
                <p>
                  Dive into our captivating collection of images and videos that
                  encapsulate moments, stories, and the essence of our journey.
                </p>
              </div>
              <div className="bg-white rounded shadow-sm p-1 mb-1 d-flex gap-1 align-items-start">
                <div>
                  <p
                    style={{ padding: "4px", background: "#eae8f6" }}
                    title="Gallery"
                    className="rounded-circle shadow border-2 border btn btn-md btn-outline-primary"
                  >
                    <FaPodcast />
                  </p>
                </div>
                <p>
                  Each image and video captures the unique beauty of aging — a
                  mosaic of experiences, laughter, resilience, and cherished
                  memories.
                </p>
              </div>

              <Link
                to="/gallery"
                className="btn btn-outline-primary rounded-pill"
              >
                <GrGallery style={{ marginRight: "5px" }} /> Gallery
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="col-lg-6 mb-1 d-flex align-items-end"
          >
            <div className="gallery__section">
              <img src={gallery} alt="gallery" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
