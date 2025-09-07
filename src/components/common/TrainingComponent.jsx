import training from "../../assets/images/img/training.jpg";
import { IoTimeOutline } from "react-icons/io5";
import { BsCalendar2Date } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa6";

export default function TrainingComponent() {

    return (
        <div className="container py-5">
            <div className="row shadow-sm border-0 rounded overflow-hidden">
                <div data-aos="fade-up"
                    data-aos-delay="0" className="bg-dark text-white text-center py-4">
                    <h2 className="fw-bold mb-1 text-warning">
                        Omojolagbe Geriatric Care Foundation Presents
                    </h2>
                    <h3 className="fw-normal text-muted">3-Days Intensive Caregiver Training</h3>
                    <p className="fst-italic mb-0 text-muted">
                        Become a Skilled, Confident & Certified Caregiver
                    </p>
                </div>

                <div data-aos="fade-up"
                    data-aos-delay="100" className="p-5">
                    <div className="row mb-5 text-center">
                        <div className="col-md-4 col-sm-6 px-1 py-2 rounded shadow border d-flex flex-column align-items-center justfiy-content-center">
                            <p className="mb-1 fw-bold text-dark">
                                <BsCalendar2Date /> Date
                            </p>
                            <p className="text-secondary">18th - 20th September, 2025</p>
                        </div>
                        <div className="col-md-4 col-sm-6 px-1 py-2 rounded shadow border d-flex flex-column align-items-center justfiy-content-center">
                            <p className="mb-1 fw-bold text-dark">
                                <IoTimeOutline />  Time
                            </p>
                            <p className="text-secondary">9:00am – 4:00pm daily</p>
                        </div>
                        <div className="col-md-4 col-sm-6 px-1 py-2 rounded shadow border d-flex flex-column align-items-center justfiy-content-center">
                            <p className="mb-1 fw-bold text-dark">
                                <FaRegAddressCard /> Venue
                            </p>
                            <p className="text-secondary">
                                Omojolagbe Geriatric Care Foundation,<br /> Alakia Isebo Road, By
                                Onile-Aro B/S, Ibadan, Oyo State.
                            </p>
                        </div>
                    </div>

                    <h4 className="fw-bolder mb-1 text-center text-primary">
                        Why Join This Training?
                    </h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            ✅ Certification in Caregiving
                        </li>
                        <li className="list-group-item">
                            ✅ Hands-on Practical Training with elderly care experts
                        </li>
                        <li className="list-group-item">
                            ✅ Basic Healthcare Skills – hygiene, medication support, vitals check
                        </li>
                        <li className="list-group-item">
                            ✅ Internship & Mentorship Opportunities
                        </li>
                        <li className="list-group-item">
                            ✅ Career Guidance on local & international caregiving jobs
                        </li>
                        <li className="list-group-item">
                            ✅ Networking with professionals in healthcare and caregiving
                        </li>
                        <li className="list-group-item">
                            ✅ Soft Skills – communication, empathy, and stress management
                        </li>
                    </ul>
                </div>

                <div data-aos="fade-up"
                    data-aos-delay="200" className="row d-flex justify-content-center mb-4">
                    <div className="col-lg-4 text-center">
                        <h4 className="fw-bold mb-1">For Registration & Enquiries:</h4>
                        <p className="mb-1">
                            📞 Tope: <a href="tel:08163089909">08163089909</a>
                        </p>
                        <p>
                            📞 Dammyy: <a href="tel:07037112792">07037112792</a>
                        </p>
                        <a target="_blank"
                            href="https://wa.me/2348057015681"
                            className="btn btn-success"
                        >
                            <i className="bi bi-whatsapp me-2"></i>Register via WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up"
                data-aos-delay="0" className="row justify-content-center align-items-center my-5">
                <div className="col-lg-6">
                    <img
                        src={training}
                        alt="Caregiver Training Flyer"
                        className="img-fluid w-100"
                    />
                </div>
            </div>
        </div>
    );
}
