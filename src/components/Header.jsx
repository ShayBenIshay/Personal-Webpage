import React from "react";
import "./styles/Header.css";

const Header = () => (
  <header>
    <h1>Shay Ben Ishay</h1>
    <p>Software Engineer</p>
    <div>
      <a
        className="github-link"
        href="https://github.com/ShayBenIshay"
        target="_blank"
        rel="noopener noreferrer"
      >
        🔗: My GitHub
      </a>
      <p>📧: shaybishay@gmail.com, 📞: +972-54-7573914</p>
    </div>
  </header>
);

export default Header;
