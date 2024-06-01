import Experience from "./content/Experience";
import Skills from "./content/Skills";
import Projects from "./content/Projects";
import Education from "./content/Education";
import { useState } from "react";
import "./styles/Content.css";

export default function Content({ list = [] }) {
  const [displayContent, setDisplayContent] = useState("experience");
  const [fadeIn, setFadeIn] = useState(true);

  const menuList = {
    projects: "Projects",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
  };
  const skills = {
    ProgrammingLanguages: ["Java", "JavaScript", "Python"],
    WebDevelopment: ["React", "HTML", "CSS"],
    VersionControl: ["Git"],
  };

  const content = {
    projects: (
      <Projects
        projects={[
          {
            title: "Smart Investor",
            description:
              "SmartInvestor: Intelligent Investment Management Platform.",
            elaboration:
              "Trade History tracking. Portfolio managing. Connected to Polygon API with last day closing rates",
            code: "the code was written in plain Javascript + HTML + CSS",
            githubUrl: "https://github.com/ShayBenIshay/Smart-Investor",
          },
          {
            title: "CV Website",
            description: "Interactive way to show my CV",
            code: "The project was developed using React.js along with JavaScript and CSS.",
            githubUrl: "https://github.com/ShayBenIshay/CV-Webpage",
          },
        ]}
      />
    ),
    experience: <Experience />,
    education: (
      <Education
        degree="Bachelor of Science in Computer Science"
        school="Technion - Israel Institute of Technology"
        location="Haifa, Israel"
        graduated="April 2021"
      />
    ),
    skills: <Skills skills={skills} />,
  };

  function handleChangeContent(content) {
    if (displayContent === content) return;
    setFadeIn(false);
    setTimeout(() => {
      setDisplayContent(content);
      setFadeIn(true);
    }, 300); // Time for the fade-out effect to complete
  }

  return (
    <section className="content-container">
      <div className="menu-list-container">
        <div className="menu-list">
          {Object.keys(menuList).map((contentTitle) => (
            <p
              key={contentTitle}
              className={displayContent === contentTitle ? "active" : ""}
              onClick={() => handleChangeContent(contentTitle)}
            >
              {menuList[contentTitle]}
            </p>
          ))}
        </div>
      </div>
      <div
        className={`main-content-container ${
          fadeIn ? "slide-in" : "slide-out"
        }`}
      >
        <div className="main-content">
          {displayContent in content && content[displayContent]}
        </div>
      </div>
    </section>
  );
}
