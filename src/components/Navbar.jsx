import { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";
import menu_icon from "../assets/menu-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import contactsData from "../data/contactsData";
import logo from "../assets/logo.png";
import ExportPdf from "../features/PDF/ExportPdf";
import useScreenSize from "../hooks/screenSize";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const isMobile = useScreenSize();
  const pcOffset = {
    experience: -140,
    projects: -140,
    education: -140,
    skills: -250,
    contact: -320,
  };
  const phoneOffset = {
    experience: -110,
    projects: -90,
    education: -80,
    skills: -80,
    contact: -240,
  };

  const { experience, projects, education, skills, contact } = isMobile
    ? phoneOffset
    : pcOffset;

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleClickOutside = (event) => {
    if (navbar.current && !navbar.current.contains(event.target)) {
      setMobileMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navbar = useRef();

  return (
    <nav
      className={`container navbar ${sticky ? "dark-nav" : ""}`}
      ref={navbar}
    >
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            About me
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            smooth={true}
            offset={experience}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} offset={projects} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="education" smooth={true} offset={education} duration={500}>
            Education
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} offset={skills} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={contact}
            duration={500}
            className="btn"
          >
            Contact me
          </Link>
        </li>
        <li>
          <ExportPdf />
        </li>
      </ul>
      <div className="github">
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
