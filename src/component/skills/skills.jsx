import React from "react";
import "./skills.css";
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
        {/* <marquee behavior="" direction="right" className="text__move">
          thank you for checking on me.
        </marquee> */}
        <div className="social__media">
          <a href="https://wa.me/+2348164228535">
            whatsapp
            <SiWhatsapp className="Siwhatsapp"/>
          </a>
          <a href="https://www.linkedin.com/in/odewumi-olajide-98b93157">
            linkedin
            <SiLinkedin className="SiLinkedin"/>
          </a>
          <a href="https://www.twitter.com/@thewealth_1">
            twitter
            <SiTwitter className="SiTwitter"/>
          </a>
        </div>
      </div>
    </>
  );
};

export default skills;
