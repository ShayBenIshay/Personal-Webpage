import Experience from "./content/Experience";
import Skills from "./content/Skills";
import Projects from "./content/Projects";
import Education from "./content/Education";
import { useState, useEffect } from "react";
import "./styles/Content.css";
import { projectsData } from "../data/projectsData";
import { educationData } from "../data/educationData";
import { skillsData } from "../data/skillsData";
import { menuList } from "../data/contentData";

export default function Content({ list = [] }) {
  const [displayContent, setDisplayContent] = useState("projects");
  const [fadeClass, setFadeClass] = useState("fade-in");

  const content = {
    projects: <Projects projects={projectsData.projects} />,
    experience: <Experience />,
    education: (
      <Education
        degree={educationData.degree}
        school={educationData.school}
        location={educationData.location}
        graduated={educationData.graduated}
        description={educationData.description}
        notes={educationData.notes}
        finalProjectName={educationData.finalProjectName}
        finalProjectUrl={educationData.finalProjectUrl}
      />
    ),
    skills: <Skills skills={skillsData.skills} />,
  };

  useEffect(() => {
    setFadeClass("fade-in");
  }, [displayContent]);

  function handleChangeContent(content) {
    if (displayContent === content) return;
    setFadeClass("fade-out");
    setTimeout(() => {
      setDisplayContent(content);
      setFadeClass("fade-in");
    }, 200);
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
      <div className="main-content-container">
        <div className={`main-content ${fadeClass}`}>
          {displayContent in content && content[displayContent]}
        </div>
      </div>
    </section>
  );
}
