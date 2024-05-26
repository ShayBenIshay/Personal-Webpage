import React from "react";
import "./styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = () => (
  <header className="header">
    <h1>Shay Ben Ishay</h1>
    <p>Software Engineer</p>
    <div className="contact-info">
      <a
        className="github-link"
        href="https://github.com/ShayBenIshay"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} /> My GitHub
      </a>
      <div className="email-phone">
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> shaybishay@gmail.com
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} /> +972-54-7573914
        </p>
      </div>
    </div>
  </header>
);

export default Header;
