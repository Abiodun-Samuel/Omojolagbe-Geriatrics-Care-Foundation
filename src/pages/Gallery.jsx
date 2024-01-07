import Breadcrump from "../components/common/Breadcrump";
import PageLayout from "../components/common/PageLayout";
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import { gallery_image, gallery_video } from "../utils/data";
import ReactPlayer from "react-player";
import { FaImages } from "react-icons/fa";
import { BiSolidVideos } from "react-icons/bi";

const GalleryPage = () => {
  let pageTitle = "Gallery";
  const [galleryType, setGalleryType] = useState("image");

  const handleSelect = (index, item, event) => {
    console.log({ index, item, event });
  };

  return (
    <PageLayout pageTitle={pageTitle}>
      <Breadcrump page={pageTitle}>
        <h1 className="text-light fw-bolder my-0 p-1 fs-1">
          <span className="text-warning">{pageTitle}</span>
        </h1>
      </Breadcrump>
      <section id="gallery__page">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4">
              <div className="d-flex gap-1 justify-content-center">
                <button
                  onClick={() => setGalleryType("image")}
                  className={
                    galleryType === "image"
                      ? "btn btn-sm btn-primary rounded-pill"
                      : "btn btn-sm btn-outline-primary rounded-pill"
                  }
                >
                  <FaImages /> Image
                </button>
                <button
                  onClick={() => setGalleryType("video")}
                  className={
                    galleryType === "video"
                      ? "btn btn-sm btn-primary rounded-pill"
                      : "btn btn-sm btn-outline-primary rounded-pill"
                  }
                >
                  <BiSolidVideos /> Video
                </button>
              </div>
            </div>
          </div>
          <div className="row mt-2 d-flex justify-content-center">
            {galleryType === "image" ? (
              <>
                <div data-aos="fade-up" className="col-10">
                  <Gallery onSelect={handleSelect} images={gallery_image} />
                </div>
              </>
            ) : (
              <>
                <div className="col-10 d-flex gap-1 flex-wrap justify-content-between">
                  {gallery_video.map((video, index) => (
                    <ReactPlayer
                      data-aos="fade-up"
                      data-aos-delay={index * 50}
                      key={video}
                      url={video}
                      width="320"
                      controls
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GalleryPage;
