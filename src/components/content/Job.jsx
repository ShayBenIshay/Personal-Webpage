import React from "react";
import "./styles/Job.css";
import { experienceData } from "../../data/experienceData";

const Job = ({
  title,
  company,
  date,
  type,
  responsibilities,
  description,
  routine,
  notes,
}) => (
  <div className="job">
    <div className="job-info">
      <h3>
        {title} at {company}
      </h3>
      <p>
        {date}, {type}
      </p>
      <div className="responsibilities">
        <h4>Responsibilities:</h4>
        <p>{responsibilities}</p>
      </div>
      <p>{notes}</p>
    </div>
    <div className="routine">
      <h4>Description</h4>
      <p>{description}</p>
      <h4>Daily Routine:</h4>
      <ul>
        {routine.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default Job;
