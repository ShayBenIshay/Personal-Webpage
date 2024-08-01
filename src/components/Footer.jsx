import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import contactsData from "../data/contactsData";

const Footer = () => (
  <footer>
    <p>© {new Date().getFullYear()} Shay. All rights reserved.</p>
    <div>
      <p>contacts:</p>
      <a
        href={contactsData.gitHub.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "whitesmoke" }}
      >
        <FontAwesomeIcon icon={faGithub} /> {contactsData.gitHub.label}
      </a>
      <a
        href={contactsData.email.href}
        style={{ color: "whitesmoke", marginLeft: "25px" }}
      >
        <FontAwesomeIcon icon={faEnvelope} /> {contactsData.email.emailAddress}
      </a>
      <a
        href={contactsData.phone.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "whitesmoke", marginLeft: "25px" }}
      >
        <FontAwesomeIcon
          icon={faWhatsapp}
          style={{
            background: "green",
            borderRadius: "50%",
          }}
        />
        {contactsData.phone.phoneNumber}
      </a>
    </div>
  </footer>
);

export default Footer;
