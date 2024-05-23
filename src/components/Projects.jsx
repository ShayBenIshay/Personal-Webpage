import React from "react";
import "./styles/Projects.css";

const Projects = ({ projects }) => (
  <section className="projects">
    <h2>Projects</h2>
    <ul>
      {projects.map((project, index) => (
        <li key={index}>
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
        </li>
      ))}
    </ul>
  </section>
);

export default Projects;
