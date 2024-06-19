import "./styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import headerData from "../data/headerData";

const Header = () => (
  <header className="header">
    <div className="header-content">
      <div className="header-left">
        <h1 className="header-title">{headerData.name}</h1>
        <p className="header-subtitle">{headerData.title}</p>
      </div>
      <div className="header-right">
        <a
          className="contact-link"
          href={headerData.gitHub.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} /> {headerData.gitHub.label}
        </a>
        <a className="contact-link" href={headerData.email.href}>
          <FontAwesomeIcon icon={faEnvelope} /> {headerData.email.emailAddress}
        </a>
        <a
          className="contact-link"
          href={headerData.phone.href}
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
          {headerData.phone.phoneNumber}
        </a>
      </div>
    </div>
  </header>
);

export default Header;
