import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
import Typewriter from 'typewriter-effect';
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am
          <br /> <span className="info-name">Harshvardhan Karn</span>.
          <br /> I have strong passion for,
          <span className="info-name typewriter">
          <Typewriter
            options={{
              strings: ['Software Development', 'Machine Learning', 'Microservices', 'Cloud Computing', 'JavaScript'],
              autoStart: true,
              loop: true,
            }}
          />
          </span>

        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/coding.png")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;