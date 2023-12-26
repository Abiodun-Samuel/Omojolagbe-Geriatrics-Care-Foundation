import transition from "../components/transition";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast from "react-hot-toast";
import Breadcrump from "../components/common/Breadcrump";
import HelmetComponent from "../components/common/Helmet";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.length || !form.email.length || !form.message.length)
      return null;
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Samuel Ayinde",
          from_email: form.email,
          to_email: "sasamuelayinde@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            "Thank you. I will get back to you as soon as possible",
            {
              duration: 5000,
            }
          );
          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          toast.error("Error, Unable to send message try again");
        }
      );
  };

  const handleChange = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <section id="contact">
      <HelmetComponent pageTitle="Samuel Ayinde | Contact" />

      <div className="container">
        <Breadcrump page="Contact Me" />
        <div className="row my-3">
          <div className="col-lg-6 mb-2">
            <div className="shadow bg-white rounded p-1">
              <h4 className="lead my-1 text-radial fs-2 fw-bolder">
                GET IN TOUCH
              </h4>

              <form>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="form-control my-1"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className="form-control my-1"
                />
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="form-control my-1"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="form-control my-1"
                  placeholder="Message"
                  required
                  rows="5"
                ></textarea>
                {/* <button onClick={handleSubmit} className="btn btn-primary mt-1"> */}
                <a
                  className="btn btn-primary mt-1 px-3"
                  href={`mailto:sasamuelayinde@gmail.com?subject=${encodeURI(form.subject)}&body=${encodeURI(form.message)}%0D%0A%0D%0ACheers%2C%0D%0AThank%20You`}
                >
                  Send
                </a>
                {/* {loading ? (
                    <span
                      className="spinner-border spinner-border-sm mx-1"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  ) : null} */}
                {/* </button> */}
              </form>
            </div>
          </div>
          <div className="col-lg-6 mb-2">
            <div className="bg-white shadow rounded p-1">
              <div className="contact__image shadow">
                <h1 className="text-white fw-bolder">Social Media</h1>
              </div>
              <div className="d-flex mt-3 mb-1 justify-content-start align-items-center flex-wrap gap-lg-3 gap-1">
                <a
                  style={{ padding: "10px" }}
                  title="Amazon"
                  className="rounded shadow border-2 border"
                  target="_blank"
                  href="http://rb.gy/uord9l"
                >
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      viewBox="0 0 16 16"
                    >
                      <g fill="currentColor">
                        <path d="M10.813 11.968c.157.083.36.074.5-.05l.005.005a89.521 89.521 0 0 1 1.623-1.405c.173-.143.143-.372.006-.563l-.125-.17c-.345-.465-.673-.906-.673-1.791v-3.3l.001-.335c.008-1.265.014-2.421-.933-3.305C10.404.274 9.06 0 8.03 0C6.017 0 3.77.75 3.296 3.24c-.047.264.143.404.316.443l2.054.22c.19-.009.33-.196.366-.387c.176-.857.896-1.271 1.703-1.271c.435 0 .929.16 1.188.55c.264.39.26.91.257 1.376v.432c-.199.022-.407.044-.621.065c-1.113.114-2.397.246-3.36.67C3.873 5.91 2.94 7.08 2.94 8.798c0 2.2 1.387 3.298 3.168 3.298c1.506 0 2.328-.354 3.489-1.54l.167.246c.274.405.456.675 1.047 1.166ZM6.03 8.431C6.03 6.627 7.647 6.3 9.177 6.3v.57c.001.776.002 1.434-.396 2.133c-.336.595-.87.961-1.465.961c-.812 0-1.286-.619-1.286-1.533ZM.435 12.174c2.629 1.603 6.698 4.084 13.183.997c.28-.116.475.078.199.431C13.538 13.96 11.312 16 7.57 16C3.832 16 .968 13.446.094 12.386c-.24-.275.036-.4.199-.299l.142.087Z" />
                        <path d="M13.828 11.943c.567-.07 1.468-.027 1.645.204c.135.176-.004.966-.233 1.533c-.23.563-.572.961-.762 1.115c-.191.154-.333.094-.23-.137c.105-.23.684-1.663.455-1.963c-.213-.278-1.177-.177-1.625-.13l-.09.009c-.095.008-.172.017-.233.024c-.193.021-.245.027-.274-.032c-.074-.209.779-.556 1.347-.623Z" />
                      </g>
                    </svg>
                  </i>
                </a>
                <a
                  style={{ padding: "10px" }}
                  title="Youtube"
                  className="rounded shadow border-2 border"
                  target="_blank"
                  href="https://www.youtube.com/@samuelayinde1"
                >
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      viewBox="0 0 256 180"
                    >
                      <path
                        fill="red"
                        d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"
                      />
                      <path
                        fill="#FFF"
                        d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
                      />
                    </svg>
                  </i>
                </a>
                {/* facebook  */}
                <a
                  style={{ padding: "10px" }}
                  title="Facebook"
                  className="rounded shadow border-2 border"
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=100095712720325&mibextid=ZbWKwL"
                >
                  <i>
                    <svg width="2em" height="2em" viewBox="0 0 486.037 1000">
                      <path
                        d="M124.074 1000V530.771H0V361.826h124.074V217.525C124.074 104.132 197.365 0 366.243 0C434.619 0 485.18 6.555 485.18 6.555l-3.984 157.766s-51.564-.502-107.833-.502c-60.9 0-70.657 28.065-70.657 74.646v123.361h183.331l-7.977 168.945H302.706V1000H124.074"
                        fill="#4267B2"
                      />
                    </svg>
                  </i>
                </a>
                {/* instagram  */}
                <a
                  style={{ padding: "10px" }}
                  title="Instagram"
                  className="rounded shadow border-2 border"
                  target="_blank"
                  href="http://instagram.com/thesamuelayinde"
                >
                  <i>
                    <svg width="2em" height="2em" viewBox="0 0 256 256">
                      <path
                        d="M128 80a48 48 0 1 0 48 48a48.054 48.054 0 0 0-48-48zm0 80a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32zm44-132H84a56.064 56.064 0 0 0-56 56v88a56.064 56.064 0 0 0 56 56h88a56.064 56.064 0 0 0 56-56V84a56.064 56.064 0 0 0-56-56zm40 144a40.045 40.045 0 0 1-40 40H84a40.045 40.045 0 0 1-40-40V84a40.045 40.045 0 0 1 40-40h88a40.045 40.045 0 0 1 40 40zm-20-96a12 12 0 1 1-12-12a12 12 0 0 1 12 12z"
                        fill="#E1306C"
                      />
                    </svg>
                  </i>
                </a>
                {/* twitter  */}
                <a
                  style={{ padding: "10px" }}
                  title="Twitter"
                  className="rounded shadow border-2 border"
                  target="_blank"
                  href="http://twitter.com/sasamuelayinde"
                >
                  {""}
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      width="2em"
                      height="2em"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path
                          d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003z"
                          fill="#1DA1F2"
                        />
                      </g>
                    </svg>
                  </i>
                </a>
                <a
                  style={{ padding: "10px" }}
                  title="Mail"
                  className="rounded shadow border-2 border"
                  target="_blank"
                  href="mailto:sasamuelayinde@gmail.com;"
                >
                  {""}
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      width="2em"
                      height="2em"
                      viewBox="0 0 32 32"
                    >
                      <g
                        fill="none"
                        stroke="#626262"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                      >
                        <path d="M2 26h28V6H2zM2 6l14 10L30 6" />
                      </g>
                    </svg>
                  </i>
                </a>
                <a
                  style={{ padding: "10px" }}
                  title="LinkTree"
                  className="rounded shadow border-2 border"
                  target="_blank"
                  href="https://linktr.ee/thesamuelayinde"
                >
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m13.736 5.853l4.005-4.117l2.325 2.38l-4.2 4.005h5.908v3.305h-5.937l4.229 4.108l-2.325 2.334l-5.74-5.769l-5.741 5.769l-2.325-2.325l4.229-4.108H2.226V8.121h5.909l-4.2-4.004l2.324-2.381l4.005 4.117V0h3.472zm-3.472 10.306h3.472V24h-3.472z"
                      />
                    </svg>
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5em"
                      height="1.5em"
                      viewBox=" 0 0 24 24"
                    >
                      <path
                        d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"
                        fill="white"
                      />
                      <path
                        d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66c-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"
                        fill="#212121"
                      />
                    </svg> */}
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default transition(Contact);
