import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import menu_icon from "../assets/menu-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import contactsData from "../data/contactsData";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container navbar ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            About me
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} offset={-260} duration={500}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} offset={-150} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="education" smooth={true} offset={-260} duration={500}>
            Education
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} offset={-260} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            Contact me
          </Link>
        </li>
      </ul>
      <div>
        <p>More works:</p>
        <a
          href={contactsData.gitHub.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} /> {contactsData.gitHub.label}
        </a>
      </div>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
