import React from "react";
import "../styles/Content.css";

const Education = ({
  degree,
  school,
  location,
  graduated,
  description,
  notes,
  finalProjectName,
  finalProjectUrl,
}) => (
  <div className="content">
    <h2>Education</h2>
    <div>
      <h3>{degree}</h3>
      <div>
        <p>{school}</p>
        <p>{location}</p>
        <p>{graduated}</p>
      </div>
    </div>
    <div>
      <h4>Description</h4>
      <p>{description}</p>
      <p>
        <a href={finalProjectUrl} target="_blank" rel="noopener noreferrer">
          {finalProjectName}
        </a>
        {": "}
        {notes}
      </p>
    </div>
  </div>
);

export default Education;
