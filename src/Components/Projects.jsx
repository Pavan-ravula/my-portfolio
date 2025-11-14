import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="py-5 bg-light" style={{ minHeight: "60vh" }}>
      <div
        className="container projects-container d-flex flex-column justify-content-center align-items-center text-center bg-light"
        style={{
          minHeight: "80vh",
          borderRadius: "10px",
        }}
      >
        <h2 className="fw-bold text-center mb-5"style={{color:"#0bbfff"}}>Projects</h2>

        <div className="row g-4 justify-content-center w-100">
          {/* Swiggy Clone Project */}
          <div className="col-md-6 col-lg-5">
            <div className="card project-card shadow-sm border-0 h-100">
              <div className="card-body">
                <h4 className="card-title fw-bold mb-3">Swiggy Clone Application</h4>
                <p className="card-text text-muted">
                  Built using React.js, JavaScript, css and REST API integration.  
                  Implemented reusable components, hooks & dynamic restaurant listing + menu flow.
                </p>
                <div className="d-flex gap-2 mt-3 justify-content-center">
                  <a href="#" className="btn btn-primary">
                    Live <FaExternalLinkAlt className="ms-1" />
                  </a>
                  <a href="#" className="btn btn-dark">
                    Code <FaGithub className="ms-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Project */}
          <div className="col-md-6 col-lg-5">
            <div className="card project-card shadow-sm border-0 h-100">
              <div className="card-body">
                <h4 className="card-title fw-bold mb-3">Personal Portfolio Website</h4>
                <p className="card-text text-muted">
                  Developed with React.js, Bootstrap and responsive design.  
                  Smooth navigation with React Router, showcasing skills, projects & contact information.
                </p>
                <div className="d-flex gap-2 mt-3 justify-content-center">
                  <a href="#" className="btn btn-primary">
                    Live <FaExternalLinkAlt className="ms-1" />
                  </a>
                  <a href="https://github.com/Pavan-ravula/my-portfolio" className="btn btn-dark">
                    Code <FaGithub className="ms-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-5">
            <div className="card project-card shadow-sm border-0 h-100">
              <div className="card-body">
                <h4 className="card-title fw-bold mb-3">E-Learning platform</h4>
                <p className="card-text text-muted">
                  Developed with html,javascript,css, Bootstrap and responsive design.  
                   showcasing skills, projects & contact information.
                </p>
                <div className="d-flex gap-2 mt-3 justify-content-center">
                  <a href="#" className="btn btn-primary">
                    Live <FaExternalLinkAlt className="ms-1" />
                  </a>
                  <a href="https://github.com/Pavan-ravula/e-learningg" className="btn btn-dark">
                    Code <FaGithub className="ms-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
