import React, { useState, useEffect } from "react";
import "./style.css";
import { FaRegCopyright } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { RiMenu5Fill } from "react-icons/ri";
import Skills from "./component/skills/skills";
import Home from "./component/home/home";
import About from "./component/about/about";
import Projects from "./component/project/projects";
import Contact from "./component/contact/contact";

function Portfolio() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // Your scroll logic here
        // For now, I'm just logging it
        console.log("Scrolled!");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <header className={showMenu ? "toggle" : ""}>
        <nav className="navbar">
          <ul>
            <li>
              <a href="#home" onClick={(e) => handleSmoothScroll(e, "home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")}>
                about
              </a>
            </li>
            <li>
              <a
                href="#project"
                onClick={(e) => handleSmoothScroll(e, "project")}
              >
                project
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
              >
                contact
              </a>
            </li>
          </ul>
        </nav>
        <Skills />
        <div
          id="menu"
          // className={`fas fa-bars ${showMenu ? "fa-times" : ""}`}
          onClick={toggleMenu}
        >
          {showMenu ? <LiaTimesSolid /> : <RiMenu5Fill />}
        </div>
      </header>

      <section className="home" id="home">
        <Home />
      </section>

      <section className="about" id="about">
        <About />
      </section>

      <section className="projects" id="project">
        <Projects />
      </section>

      <section className="contact" id="contact">
        <Contact />
      </section>

      <footer className="footer">
        <a href="#home" className="text">
          <FaRegCopyright className="FaRegCopyright" />
          Odewumi Olajide
        </a>
      </footer>
    </div>
  );
}

export default Portfolio;
