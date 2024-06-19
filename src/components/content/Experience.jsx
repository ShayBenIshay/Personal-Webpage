import React from "react";
import Job from "./Job";
import "../styles/Content.css";
import { experienceData } from "../../data/experienceData";

const Experience = () => (
  <div className="content">
    <h2>{experienceData.title}</h2>
    <Job
      title={experienceData.jobs[0].title}
      company={experienceData.jobs[0].company}
      date={experienceData.jobs[0].date}
      type={experienceData.jobs[0].type}
      responsibilities={experienceData.jobs[0].responsibilities}
      description={experienceData.jobs[0].description}
      routine={experienceData.jobs[0].routine}
      notes={experienceData.jobs[0].notes}
    />
  </div>
);

export default Experience;
