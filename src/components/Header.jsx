import React from "react";
import "./styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Header = () => (
  <header className="header">
    <div className="header-content">
      <div className="header-left">
        <h1 className="header-title">Shay Ben Ishay</h1>
        <p className="header-subtitle">Software Engineer</p>
      </div>
      <div className="header-right">
        <a
          className="contact-link"
          href="https://github.com/ShayBenIshay"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} /> My GitHub
        </a>
        <a className="contact-link" href="mailto:shaybishay@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} /> shaybishay@gmail.com
        </a>
        <a
          className="contact-link"
          href="https://wa.me/972547573914"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            style={{
              background: "green",
              borderRadius: "50%",
            }}
          />{" "}
          +972-54-7573914
        </a>
      </div>
    </div>
  </header>
);

export default Header;
