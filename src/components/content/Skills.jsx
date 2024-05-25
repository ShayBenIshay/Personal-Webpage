import React from "react";
import "../styles/Content.css";

const Skills = ({ skills }) => (
  <div className="main-content">
    <h2>Skills</h2>
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

export default Skills;
