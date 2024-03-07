import { useState } from "react";
import Modal from 'react-modal';
import { ImCancelCircle } from "react-icons/im";
import { Gallery } from "react-grid-gallery";
import { gallery_ExpertImage } from "../utils/data";
import { MdOutlineArrowLeft } from "react-icons/md";
import { MdOutlineArrowRight } from "react-icons/md";

const ExpertGallary = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSelect = (index,) => {
    openModal(index);
  };
  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === gallery_ExpertImage.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? gallery_ExpertImage.length - 1 : prevIndex - 1));
  };

  return (
    <>
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
      <div className="" style={{ display:"flex",gap:"10px", flexDirection:'column', justifyItems:"center", alignItems:"center"}}>
      <ImCancelCircle onClick={closeModal} className="CancelBtn"  />
        <img
         className="imgPIc"
          src={gallery_ExpertImage[selectedImageIndex].src}
          alt={gallery_ExpertImage[selectedImageIndex].caption}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
        </div>
        <div className="prev-button">
      <MdOutlineArrowRight style={{cursor:'pointer'}}   onClick={nextImage}/>
      </div>
      </div>
      </div>
      </Modal>
    <div className="mt-2 d-flex justify-content-center">
    <div data-aos="fade-up" className="col-10">
    <h5 className="mb-2">Elderly Health Consultation Day</h5>
    <Gallery onClick={handleSelect} images={gallery_ExpertImage} />
    </div>
    </div>
    </>
  )
}

export default ExpertGallary
