import { useEffect, useRef, useState } from "react";

export default function BootstrapModal({ id = "myModal", title, children, delay = 5000 }) {
    const modalRef = useRef(null);
    const [show, setShow] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true)
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    const closeModal = () => {
        setShow(false)
    };

    return (
        <>
            {show && <>
                <div
                    tabIndex="-1"
                    aria-labelledby={`${id}Label`}
                    className="modal"
                    id={id}
                    ref={modalRef}
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content shadow-lg rounded-3">
                            <div className="modal-header">
                                <h5 className="modal-title fw-bold" id={`${id}Label`}>
                                    {title}
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={closeModal}
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">{children}</div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={closeModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>}
        </>
    );
}
