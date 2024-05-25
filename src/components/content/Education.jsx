import React from "react";
// import "./styles/index.css";
import "../styles/Content.css";
// import "./styles/Education.css";
// import "./styles/Cube.css";

const Education = ({ degrees }) => (
  <div className="main-content">
    <h2>Education</h2>
    <br />
    <ul>
      {degrees.map((degree, index) => (
        <li key={index}>
          <h3>{degree.degree}</h3>
          <p>
            {degree.school}, {degree.year}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

export default Education;
