import React from "react";
import "../styles/Content.css";
import "./styles/Skills.css";

const formatCategoryName = (category) => {
  return category.replace(/([A-Z])/g, " $1").trim();
};

const Skills = ({ skills }) => (
  <div>
    <h2>Skills</h2>
    <div className="skills-container">
      {Object.keys(skills).map((category) => (
        <div key={category} className="skills-category">
          <h3>{formatCategoryName(category)}</h3>
          <ul>
            {skills[category].map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
