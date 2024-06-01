import React from "react";
import "../styles/Content.css";

const Education = ({ degree, school, location, graduated }) => (
  <div>
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
