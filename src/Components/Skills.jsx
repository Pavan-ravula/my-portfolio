import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaNode,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Skills.css";

export default function Skills() {
  const skills = [
    { icon: <FaReact size={40} color="#61DBFB" />, name: "React.js" },
    { icon: <FaJs size={40} color="#FFD700" />, name: "JavaScript (ES6+)" },
    { icon: <FaHtml5 size={40} color="#E54C21" />, name: "HTML5" },
    { icon: <FaCss3Alt size={40} color="#1572B6" />, name: "CSS3" },
    { icon: <FaBootstrap size={40} color="#7711F6" />, name: "Bootstrap" },
    { icon: <FaGitAlt size={40} color="#F1502F" />, name: "Git & GitHub" },
    { icon: <FaNode size={40} color="#44883E" />, name: "Node.js (Basics)" },
  ];

  return (
    <section id="skills" className="py-5 bg-light" style={{ minHeight: "60vh" }}>
      <div
        className="container text-center d-flex flex-column justify-content-center align-items-center"
        style={{
          minHeight: "80vh",
          boxShadow: "0 0 20px black",
          borderRadius: "10px",
        }}
      >
        <h2 className="fw-bold text-center mb-5" style={{color:"#0bbfff"}}>Skills</h2>

        <div className="row justify-content-center g-4">
          {skills.map((skill, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <div className="card skill-card text-center border-0 shadow-sm py-4">
                <div className="icon mb-3">{skill.icon}</div>
                <h6 className="fw-semibold">{skill.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
