import React from 'react'
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Components/Footer';
import Education from './Components/Education';


const App = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education/>
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
