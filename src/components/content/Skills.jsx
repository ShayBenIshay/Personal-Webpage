import React from "react";
import "../styles/Content.css";
import "./styles/Skills.css";

const Skills = ({ skills }) => (
  <div className="main-content">
    <h2>Skills</h2>
    <div className="skills-container">
      {Object.keys(skills).map((category) => (
        <div key={category} className="skills-category">
          <h3>{category}</h3>
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

/*
<div>
<h2>Skills</h2>
    <div>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  </div>

*/
