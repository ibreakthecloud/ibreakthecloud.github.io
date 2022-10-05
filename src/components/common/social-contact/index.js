import React from "react";
import { SocialData } from "../../data/social";
import "./social-contact.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'
import { FaGithub, FaTwitter, FaGlobe, FaLinkedin } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md'
function SocialContact() {
  const data = SocialData;
  return (
    <div className="social-contact">
      <div className="social-icon-div">
        <a href="https://linkedin.com/in/harshvardhankarn/" target="_blank">
          <FaLinkedin size={50} color="#0077b5" />
        </a>
      </div>
      <div className="social-icon-div">
        <a href="mailto:harshvkarn54@gmail.com" target="_blank">
          <MdAlternateEmail size={50} color="#7E57C2" />
        </a>
      </div>
      <div className="social-icon-div">
        <a href="https://twitter.com/harshvkarn" target="_blank">
          <FaTwitter size={50} color="#1DA1F2" />
        </a>
      </div>
      <div className="social-icon-div">
        <a href="https://github.com/ibreakthecloud" target="_blank">
          <FaGithub size={50} color="#171515" />
        </a>
      </div>
      <div className="social-icon-div">
        <a href="https://harshvardhan.tech/" target="_blank">
          <FaGlobe size={50} color="#7E57C2" />
        </a>
      </div>
      {/* {data.map ((item) => {
          return (
            <a href={item.link}>
              <div className="social-icon-div">
                <img src={item.icon} className="social-icon"/>
              </div>
            </a>
          );
        })}  */}
    </div>
  );
}

export default SocialContact;