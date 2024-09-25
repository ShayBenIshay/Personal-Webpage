import contactsData from "../data/contactsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faWhatsapp,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const Slider = () => {
  return (
    <div className="social">
      <button>
        <a
          href={contactsData.phone.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
          {/* <img src={phone_icon} alt="" /> */}
        </a>
      </button>
      <button>
        <a href={contactsData.email.href}>
          <FontAwesomeIcon icon={faGoogle} />
        </a>
      </button>
      <button>
        <a
          href={contactsData.gitHub.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </button>
      <button>
        <a
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
