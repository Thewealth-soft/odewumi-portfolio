import React from "react";
import './project.css'
import picture1 from "../../images/project1.jpg";
import picture2 from "../../images/project2.jpg";
import picture3 from "../../images/project3.jpg";
import picture4 from "../../images/project4.jpg";
import picture5 from "../../images/project5.jpg";
import picture6 from "../../images/project6.jpg";
function Projects() {
  return (
    <section className="projects" id="project">
      <h1 className="heading">my projects</h1>
      <div className="project__container">
        <div className="box">
          <img src={picture1} alt="" />
        </div>
        <div className="box">
          <img src={picture2} alt="" />
        </div>
        <div className="box">
          <img src={picture3} alt="" />
        </div>
        <div className="box">
          <img src={picture4} alt="" />
        </div>
        <div className="box">
          <img src={picture5} alt="" />
        </div>
        <div className="box">
          <img src={picture6} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Projects;
