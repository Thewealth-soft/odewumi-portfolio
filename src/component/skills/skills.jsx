import React from "react";
import "./skills.css";
import { FaArrowDown } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiCss3,
  SiHtml5,
  SiWhatsapp,
  SiLinkedin,
  SiTwitter,
} from "react-icons/si";
const skills = () => {
  return (
    <>
      <div className="skills">
        <h3>My Skills</h3>
        <div className="my__skills">
          <div className="skill">
            <SiJavascript className="SiJavascript" />
            <p>JAVASCRIPT</p>
          </div>
          <div className="skill two">
            <SiReact className="SiReact" />
            <p>REACT Js</p>
          </div>
          <div className="skill three">
            <SiCss3 className="SiCss3" />
            <p>CSS3</p>
          </div>
          <div className="skill four">
            <SiHtml5 className="SiHtml5 " />
            <p>HTML5</p>
          </div>
        </div>
        <div className="social__media-contact">
          <div className="text_design">
          <h1>
            Thank you for checking me out. Here are my social handles.
          </h1>
            <FaArrowDown className="FaArrowDown" />
          </div>
          <div className="social__media">
            <a href="https://wa.me/+2348164228535">
              <SiWhatsapp className="Siwhatsapp" /> whatsapp
            </a>
            <a href="https://www.linkedin.com/in/odewumi-olajide-98b93157">
              <SiLinkedin className="SiLinkedin" /> linkedin
            </a>
            <a href="https://www.twitter.com/@thewealth_1">
              <SiTwitter className="SiTwitter" /> twitter
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default skills;
