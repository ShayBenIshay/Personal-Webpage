import React from "react";
import Job from "./Job";
import "./styles/Experience.css";

const Experience = () => (
  <section>
    <h2>Experience</h2>
    <Job
      title="Software Developer"
      company="Amdocs"
      date="12/2021 - 09/2023"
      type="Full-time"
      responsibilities="Investigating issues with business flows."
      routine={[
        "Running the flow",
        "Fetching and checking logs",
        "Analyzing the issue",
        "Debugging services as needed",
        "Fixing issues",
        "Running fixes through CI/CD pipeline (Jenkins)",
        "Merging changes to the main branch",
        "Rolling up/down if needed",
      ]}
    />
  </section>
);

export default Experience;
