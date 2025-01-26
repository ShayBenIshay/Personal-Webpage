import { useEffect, useState, useRef } from "react";
import menu_icon from "../../assets/menu-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import contactsData from "../../data/contactsData";
import ExportPdf from "../../features/PDF/ExportPdf";
import ContactModal from "../ContactModal/ContactModal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="navbar" ref={navbar} id="navbar">
      <span className="navbar__span">
        <button
          className="navbar__logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <h1 className="navbar__h1">
            <span className="dev">Shay</span>{" "}
            <span className="span-redundent4">Ben Ishay</span>
            <span className="span-redundent"> Personal Webpage</span>
          </h1>
        </button>
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
      </span>
      <ul className={mobileMenu ? "navbar__ul" : "navbar__ul hide-mobile-menu"}>
        <li className="nowrap">
          <button
            className="navbar__a"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            About me
          </button>
        </li>
        <li>
          <button
            className="navbar__a"
            onClick={() => handleScroll("education")}
          >
            Education
          </button>
        </li>
        <li>
          <button
            className="navbar__a"
            onClick={() => handleScroll("experience")}
          >
            Experience
          </button>
        </li>
        <li>
          <button
            className="navbar__a"
            onClick={() => handleScroll("projects")}
          >
            Projects
          </button>
        </li>
        <li>
          <button className="navbar__a" onClick={() => handleScroll("skills")}>
            Skills
          </button>
        </li>
        <li className="nowrap">
          <button className="navbar__a" onClick={() => handleScroll("contact")}>
            Contact me
          </button>
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
        <>
          <button
            className="contact-button"
            onClick={() => setIsModalOpen(true)}
            aria-label="Open contact form"
          >
            <svg viewBox="0 0 32 32" className="contact-icon">
              <path d="M26,3H6A3,3,0,0,0,3,6V30.41l5.12-5.12A1.05,1.05,0,0,1,8.83,25H26a3,3,0,0,0,3-3V6A3,3,0,0,0,26,3Zm1,19a1,1,0,0,1-1,1H8.83a3,3,0,0,0-2.12.88L5,25.59V6A1,1,0,0,1,6,5H26a1,1,0,0,1,1,1Z" />
              <rect height="2" width="12" x="10" y="11" />
              <rect height="2" width="7" x="10" y="15" />
            </svg>
          </button>
        </>
      )}

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
