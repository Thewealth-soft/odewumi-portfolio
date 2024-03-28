import React from "react";
import { BiSolidUser } from "react-icons/bi";
import "./home.css";
import profilePicture from "../../images/profile-pix.jpg";

function Home() {
  return (
    <section className="home" id="home">
      <div className="image">
        <img src={profilePicture} alt="portfolio pix" />
      </div>
      <div>
        <p>
          Hi! <br />
          I'M <span>Odewumi Olajide</span>
          <br />
          Front-End Software Developer, I constantly devoted myself Into
          Improving my skills, Learning new things, And Working on projects that
          garnered me more knowledge and information to give out excellent
          service.
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; As A Front-End Developer, I love to Create a
          beautiful and User-friendly interface with the help of Reactjs,
          JavaScript, JQuery, CSS, And HTML.
        </p>
        <a href="#about">
          <button className="btn">
            ... About me <BiSolidUser />
          </button>
        </a>
      </div>
    </section>
  );
}

export default Home;
