/* eslint-disable no-unused-vars */
import Breadcrump from "../components/common/Breadcrump";
import PageLayout from "../components/common/PageLayout";
import { useState } from "react";
import Modal from 'react-modal';
import { ImCancelCircle } from "react-icons/im";
import { Gallery } from "react-grid-gallery";
import { gallery_image, gallery_video } from "../utils/data";
import ReactPlayer from "react-player";
import { FaImages } from "react-icons/fa";
import { BiSolidVideos } from "react-icons/bi";
import { MdOutlineArrowLeft } from "react-icons/md";
import { MdOutlineArrowRight } from "react-icons/md";
import ExpertGallary from "./ExpertGallary";



const GalleryPage = () => {
  let pageTitle = "Gallery";
  const [galleryType, setGalleryType] = useState("image");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSelect = (index, item, event) => {
    openModal(index);
  };
  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === gallery_image.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? gallery_image.length - 1 : prevIndex - 1));
  };
  return (
    <PageLayout pageTitle={pageTitle}>
      <Breadcrump page={pageTitle}>
        <h1 className="text-light fw-bolder my-0 p-1 fs-1">
          <span className="text-warning">{pageTitle}</span>
        </h1>
      </Breadcrump>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="imgSlider"
      >
      <div className="imgContainer">
      <div className="slider">
      <div className="prev-button">
      <MdOutlineArrowLeft style={{cursor:'pointer'}}   onClick={prevImage}/>
      </div>
      <div className="" style={{ display:"flex",gap:"3px", flexDirection:'column', justifyItems:"center", alignItems:"center"}}>
      <ImCancelCircle onClick={closeModal} className="CancelBtn"  />
        <img
         className="imgPIc"
          src={gallery_image[selectedImageIndex].src}
          alt={gallery_image[selectedImageIndex].caption}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>
        <div className="prev-button">
      <MdOutlineArrowRight style={{cursor:'pointer'}}   onClick={nextImage}/>
      </div>
      </div>
      </div>
      </Modal>
      <section id="gallery__page" >
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
              <ExpertGallary/>
                <div data-aos="fade-up" className="col-10" style={{marginTop:"70px"}}>
                  <Gallery onClick={handleSelect} images={gallery_image} />
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
