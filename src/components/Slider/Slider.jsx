import contactsData from "../../data/contactsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faWhatsapp,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import "./slider.css";

const Slider = () => {
  return (
    <div className="social">
      <button className="social__button">
        <a
          className="social__a"
          href={contactsData.phone.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </button>
      <button className="social__button">
        <a className="social__a" href={contactsData.email.href}>
          <FontAwesomeIcon icon={faGoogle} />
        </a>
      </button>
      <button className="social__button">
        <a
          className="social__a"
          href={contactsData.gitHub.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </button>
      <button className="social__button">
        <a
          className="social__a"
          href={contactsData.linkedIn.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </button>
    </div>
  );
};

export default Slider;
