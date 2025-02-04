import { useEffect, useState, useRef } from "react";
import menu_icon from "../../assets/menu-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import contactsData from "../../data/contactsData";
import ContactModal from "../ContactModal/ContactModal";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfDoc from "../../features/PDF/PdfDoc";

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
    if (
      navbar_mobile.current &&
      !navbar_mobile.current.contains(event.target)
    ) {
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

  const navbar_mobile = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="navbar" id="navbar">
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
      <ul
        className={mobileMenu ? "navbar__ul" : "navbar__ul hide-mobile-menu"}
        ref={navbar_mobile}
      >
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
          <PDFDownloadLink
            className="export-to-pdf-button"
            document={<PdfDoc />}
            fileName="ShayCV.pdf"
          >
            <svg
              className="export-icon"
              viewBox="0 0 576 512"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              width="31"
              height="31"
            >
              <path d="M384 121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128zM571 308l-95.7-96.4c-10.1-10.1-27.4-3-27.4 11.3V288h-64v64h64v65.2c0 14.3 17.3 21.4 27.4 11.3L571 332c6.6-6.6 6.6-17.4 0-24zm-379 28v-32c0-8.8 7.2-16 16-16h176V160H248c-13.2 0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V352H208c-8.8 0-16-7.2-16-16z" />
            </svg>
          </PDFDownloadLink>
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
