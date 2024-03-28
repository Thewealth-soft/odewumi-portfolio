import React from "react";
import "./about.css";
import { SiGithub, SiLinkedin, SiTwitter, SiWhatsapp } from "react-icons/si";
function About() {
  return (
    <>
      <h1 className="heading">about me</h1>
      <div className="my__info">
        <div className="info__details">
          <h3>
            <span>name:</span> Odewumi Olajide
          </h3>
          <h3>
            <span>qualification:</span> HND
          </h3>
          <h3>
            <span>post:</span> front end developer
          </h3>
          <h3>
            <span>language:</span> English
          </h3>
          <a href="https://Github.com/Thewealth-soft">
            <button className="btn">
             <SiGithub /> github 
            </button>
          </a>
          <div className="social__media about__media">
            <ul>
              <li>
                <a href="https://wa.me/+2348164228535">
                  <SiWhatsapp className="Siwhatsapp" />
                  whatsapp
                </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/in/odewumi-olajide-98b93157"> <SiLinkedin className="SiLinkedin" />
                  linkedin
                 </a>
              </li>
              <li>
                <a href="https://www.twitter.com/@thewealth_1"><SiTwitter className="SiTwitter" />
                  twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="achievement">
          <div className="box">
            <span>2+</span>
            <h3>years of experience</h3>
          </div>
          <div className="box">
            <span>7</span>
            <h3>project completed</h3>
          </div>
          <div className="box">
            <span>27+</span>
            <h3>happy clients</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
