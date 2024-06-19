import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/Content.css";

const Projects = ({ projects }) => (
  <div className="content">
    <h2>Projects</h2>
    <ul>
      {projects.map((project, index) => (
        <div key={index} className="horizontal-content">
          <h3>{project.title}</h3>
          <p>{project.subtitle}</p>
          <p>{project.description}</p>
          <p>{project.notes}</p>
          <a
            className="github-link"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> {project.title}
          </a>
        </div>
      ))}
    </ul>
  </div>
);

export default Projects;
