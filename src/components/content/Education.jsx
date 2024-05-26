import React from "react";
// import "./styles/index.css";
import "../styles/Content.css";
// import "./styles/Education.css";
// import "./styles/Cube.css";

const Education = ({ degree, school, location, graduated }) => (
  <div className="main-content">
    <h2>Education</h2>
    <br />
    <div>
      <h3>{degree}</h3>
      <div>
        <p>{school}</p>
        <p>{location}</p>
        <p>{graduated}</p>
      </div>
    </div>
  </div>
);

export default Education;
