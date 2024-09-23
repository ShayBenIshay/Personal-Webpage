import { useEffect, useState, useRef } from "react";
import { Link, scroller } from "react-scroll";
import menu_icon from "../assets/menu-icon.png";
import up_icon from "../assets/up-icon.png";
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
    experience: -120,
    projects: -75,
    education: -75,
    skills: -70,
    contact: -45,
  };
  const phoneOffset = {
    experience: -50,
    projects: -10,
    education: -15,
    skills: -15,
    contact: +15,
  };

  const { experience, projects, education, skills, contact } = isMobile
    ? phoneOffset
    : pcOffset;

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  const scrollUp = () => {
    scroller.scrollTo("hero", {
      smooth: true,
      duration: 500,
      offset: 0,
    });
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
      // className={`container navbar ${sticky ? "dark-nav" : ""}`}
      className={"navbar dark-nav"}
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
      {sticky && (
        <img
          src={up_icon}
          alt="Scroll Up"
          className="scroll-up"
          onClick={scrollUp}
        />
      )}
    </nav>
  );
};

export default Navbar;
