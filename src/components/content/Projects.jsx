import React from "react";
import "../styles/Content.css";

const Projects = ({ projects }) => (
  <div className="main-content">
    <h2>Projects</h2>
    <ul>
      {projects.map((project, index) => (
        <div key={index} className="horizontal-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>{project.elaboration}</p>
          <p>{project.code}</p>
          <a
            className="github-link"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub🔗: {project.title}
          </a>
        </div>
      ))}
    </ul>
  </div>
);

export default Projects;
