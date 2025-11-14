import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="py-5 bg-light" style={{ minHeight: "50vh" }}>
      <div
        className="container contact-container text-center d-flex flex-column justify-content-center align-items-center bg-light"
        style={{
          minHeight: "80vh",
          borderRadius: "10px",
        }}
      >
        <h2 className="fw-bold mb-5" style={{color:"#0bbfff"}}>Contact</h2>

        <div className="row justify-content-center g-4 w-100">
          {/* Email */}
          <div className="col-10 col-md-5 col-lg-3">
            <div className="contact-card card shadow-sm border-0 py-4 h-100 d-flex align-items-center justify-content-center">
              <FaEnvelope size={28} className="mb-3 text-primary" />
              <a
                href="mailto:pavanravula9652@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="fw-semibold text-decoration-none text-dark"
              >
                pavanravula9652@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="col-10 col-md-5 col-lg-3">
            <div className="contact-card card shadow-sm border-0 py-4 h-100 d-flex align-items-center justify-content-center">
              <FaPhoneAlt size={28} className="mb-3 text-success" />
              <span className="fw-semibold">+91 9182835938</span>
            </div>
          </div>

          {/* Location */}
          <div className="col-10 col-md-5 col-lg-3">
            <div className="contact-card card shadow-sm border-0 py-4 h-100 d-flex align-items-center justify-content-center">
              <FaMapMarkerAlt size={28} className="mb-3 text-danger" />
              <span className="fw-semibold">Mogalthur, Andhra Pradesh</span>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="col-10 col-md-5 col-lg-3">
            <div className="contact-card card shadow-sm border-0 py-4 h-100 d-flex align-items-center justify-content-center">
              <FaLinkedin size={28} className="mb-3 text-info" />
              <a
                href="https://www.linkedin.com/in/r-pavan-kumar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="fw-semibold text-decoration-none text-dark"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="col-10 col-md-5 col-lg-3">
            <div className="contact-card card shadow-sm border-0 py-4 h-100 d-flex align-items-center justify-content-center">
              <FaGithub size={28} className="mb-3 text-dark" />
              <a
                href="https://github.com/Pavan-ravula"
                target="_blank"
                rel="noopener noreferrer"
                className="fw-semibold text-decoration-none text-dark"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
