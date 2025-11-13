import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="py-5 bg-light" style={{ minHeight: "70vh" }}>
      <div
        className="container about-container d-flex flex-column justify-content-center align-items-center text-center bg-light"
        style={{
          minHeight: "80vh",
          borderRadius: "10px",
        }}
      >
        <h2 className="fw-bold text-center mb-5 mt-4" style={{ fontSize: "35px",color:"#00bfff" }}>
          About Me
        </h2>

        <div className="row justify-content-center align-items-start w-100 px-3">
          {/* LEFT SIDE - Summary */}
          <div className="col-md-7 mb-4">
            <div className="about-card bg-dark text-white p-4 rounded shadow-sm">
              <p className="lead mb-0">
                Results-driven React Frontend Developer skilled in building
                high-performance, responsive, and user-focused web applications.
                Proficient in React.js, JavaScript (ES6+), HTML, and CSS, with a
                solid understanding of component-based architecture and state
                management using React Hooks. Passionate about crafting clean UI
                designs and writing maintainable code that enhances user
                experiences and meets business goals.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - Info */}
          <div className="col-md-5 mb-4">
            <ul className="list-group shadow-sm rounded">
              <li className="list-group-item">
                <strong>Email:</strong> pavanravula1919@gmail.com
              </li>
              <li className="list-group-item">
                <strong>Phone:</strong> +91 9182835938
              </li>
              <li className="list-group-item">
                <strong>Location:</strong> Mogalthur, Andhra Pradesh
              </li>
              <li className="list-group-item">
                <strong>Languages:</strong> English, Telugu
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
