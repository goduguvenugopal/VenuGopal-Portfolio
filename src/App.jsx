import React from "react";
import "./App.css";
import Navbar from "./pages/Navbar";
import Introduction from "./pages/Introduction";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <div id="about" className="select-none">
        <Introduction />
      </div>

      <div className="select-none" id="skills">
        <Skills />
      </div>

      <div className="select-none" id="projects">
        <Projects />
      </div>

      <div className="select-none" id="education">
        <Education />
      </div>

      <div className="select-none" id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
