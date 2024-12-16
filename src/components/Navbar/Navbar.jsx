import { useEffect, useState, useRef } from "react";
import menu_icon from "../../assets/menu-icon.png";
import up_icon from "../../assets/up-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import contactsData from "../../data/contactsData";
import ExportPdf from "../../features/PDF/ExportPdf";

import "./navbar.css";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

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

  const handleScroll = (elementId) => {
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    const targetElement = document.getElementById(elementId);
    const elementPosition = targetElement.offsetTop - navbarHeight;
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  };

  const navbar = useRef();

  return (
    <nav className="navbar" ref={navbar} id="navbar">
      <h1 className="navbar__h1">
        <span>
          <span className="dev">Shay</span>{" "}
          <span className="span-redundent4">Ben Ishay</span>
          <span className="span-redundent"> Personal Webpage</span>
        </span>
        <span className="navbar__span span-redundent3">
          <span className="span-redundent2">More works:</span>
          <a
            className="navbar__a navbar__a-animation"
            href={contactsData.gitHub.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="fa-github-icon" icon={faGithub} />
            My Github
          </a>
        </span>
      </h1>

      <ul className={mobileMenu ? "navbar__ul" : "navbar__ul hide-mobile-menu"}>
        <li className="nowrap">
          <a className="navbar__a" href="#">
            About me
          </a>
        </li>
        <li>
          <a
            className="navbar__a"
            href="#education"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("education");
            }}
          >
            Education
          </a>
        </li>
        <li>
          <a
            className="navbar__a"
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("experience");
            }}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            className="navbar__a"
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("projects");
            }}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="navbar__a"
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("skills");
            }}
          >
            Skills
          </a>
        </li>
        <li className="nowrap">
          <a
            className="navbar__a"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("contact");
            }}
          >
            Contact me
          </a>
        </li>
        <li className="navbar__a nowrap">
          <ExportPdf />
        </li>
      </ul>
      <button
        className="menu-icon"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        tabIndex="0"
      >
        <img src={menu_icon} alt="menu" />
      </button>
      {sticky && (
        <button className="scroll-up">
          <a href="#">
            <img src={up_icon} alt="Scroll Up" />
          </a>
        </button>
      )}
    </nav>
  );
};

export default Navbar;
