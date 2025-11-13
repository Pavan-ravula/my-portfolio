import "bootstrap/dist/css/bootstrap.min.css";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="py-5 bg-light" style={{ minHeight: "60vh" }}>
      <div
        className="container education-container d-flex flex-column justify-content-center align-items-center text-center bg-light"
        style={{
          minHeight: "80vh",
          borderRadius: "10px",
        }}
      >
        <h2 className="fw-bold text-center mb-5" style={{color:"#0bbfff"}}>Education</h2>

        <div className="row justify-content-center g-4 w-100">
          {/* B.Tech */}
          <div className="col-md-6 col-lg-4">
            <div className="card education-card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Bachelor of Technology (B.Tech)
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Swarnandhra Institute of Engineering and Technology
                </h6>
                <p className="card-text mt-2 mb-1">2021 – 2025</p>
                <p className="mb-1">
                  <strong>Aggregate:</strong> 7.75 CGPA
                </p>
              </div>
            </div>
          </div>

          {/* Intermediate */}
          <div className="col-md-6 col-lg-4">
            <div className="card education-card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">Intermediate</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Sri Surya Junior College
                </h6>
                <p className="card-text mt-2 mb-1">2019 – 2021</p>
                <p className="mb-1">
                  <strong>Percentage:</strong> 88.01%
                </p>
              </div>
            </div>
          </div>

          {/* SSC */}
          <div className="col-md-6 col-lg-4">
            <div className="card education-card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Secondary School Certificate (SSC)
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Z.P.H. School
                </h6>
                <p className="card-text mt-2 mb-1">2018 – 2019</p>
                <p className="mb-1">
                  <strong>CGPA:</strong> 9.0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
