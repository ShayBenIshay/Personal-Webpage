import Experience from "./content/Experience";
import Skills from "./content/Skills";
import Projects from "./content/Projects";
import Education from "./content/Education";
import { useState } from "react";
import "./styles/Content.css";

export default function Content({ list = [] }) {
  const [displayContent, setDisplayContent] = useState("Experience");
  const [fadeIn, setFadeIn] = useState(true);

  function handleChangeContent(content) {
    if (displayContent === content) return;
    setFadeIn(false);
    setTimeout(() => {
      setDisplayContent(content);
      setFadeIn(true);
    }, 300); // Time for the fade-out effect to complete

    // setDisplayContent(content);
  }

  return (
    <section className="content-container">
      <div className="menu-list-container">
        <ul className="menu-list">
          <li onClick={() => handleChangeContent("Experience")}>Experience</li>
          <li onClick={() => handleChangeContent("Education")}>Education</li>
          <li onClick={() => handleChangeContent("Skills")}>Skills</li>
          <li onClick={() => handleChangeContent("Projects")}>Projects</li>
        </ul>
      </div>
      <div
        className={`main-content-container ${
          fadeIn ? "slide-in" : "slide-out"
        }`}
      >
        {displayContent === "Experience" && <Experience />}
        {displayContent === "Education" && (
          <Education
            degrees={[
              {
                degree: "BSc Computer Science",
                school: "Technion - Israel Institute of Technology",
                year: "2021",
              },
            ]}
          />
        )}
        {displayContent === "Skills" && (
          <Skills
            skills={["Java", "JavaScript", "React", "git", "CSS", "HTML"]}
          />
        )}
        {displayContent === "Projects" && (
          <Projects
            projects={[
              {
                title: "Smart Investor",
                description:
                  "SmartInvestor: Intelligent Investment Management Platform.",
                elaboration:
                  "Trade History tracking. Porfolio managing. Connected to Polygon API with last day closing rates",
                code: "the code was written in plain Javascript + HTML + CSS",
                githubUrl: "https://github.com/ShayBenIshay/Smart-Investor",
              },
              {
                title: "CV Website",
                description: "Interactive way to show my CV",
                // elaboration: "",
                code: "The project was developed using React.js along with JavaScript and CSS.",
                githubUrl: "https://github.com/ShayBenIshay/CV-Webpage",
              },
            ]}
          />
        )}
      </div>
    </section>
  );
}
