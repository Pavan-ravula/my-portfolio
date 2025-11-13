import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Hero.css';

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "React Frontend Developer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setText((prev) => {
        if (prev.length < fullText.length) {
          return prev + fullText[prev.length];
        } else {
          return prev;
        }
      });
    }, 150); // typing speed (ms per letter)

    return () => clearInterval(typingInterval);
  }, []);

  // Restart typing after completion
  useEffect(() => {
    if (text === fullText) {
      const pause = setTimeout(() => {
        setText("");
        setIndex((prev) => prev + 1);
      }, 1500); // pause before restart
      return () => clearTimeout(pause);
    }
  }, [text]);

  return (
    <section
      id="home"
      className="d-flex align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="container text-center justify-content-center d-flex align-items-center flex-column"
        style={{
          height: "80vh",
          // boxShadow: "0 0 20px black",
          marginTop: "20px",
        }}
      >
        {/* === PHOTO AREA === */}
        {/* example: <img src="" alt="profile" className="rounded-circle mb-4" width="150" height="150" /> */}

        <h1 className="display-4 fw-bold">Pavan Kumar Ravula</h1>

        {/* === Typing Effect Text === */}
        <h3 className="text-primary fw-semibold mt-2">
          {text}
          <span className="blinking-cursor">|</span>
        </h3>

        <p className="text-muted mt-3" style={{ fontSize: "20px" }}>
          I build responsive, user-focused interfaces using React.js and modern
          JavaScript.
        </p>
        <p className="text-muted mt-0" style={{ fontSize: "20px" }}>
          Looking for an entry-level React Frontend Developer position.
        </p>

        <a
          href="/PAVAN KUMAR RAVULA RESUME (REACT JS).pdf"
          className="btn btn-primary btn-lg mt-4 px-4 py-2 bg-success"
        >
          View My Resume
        </a>
      </div>
    </section>
  );
}
