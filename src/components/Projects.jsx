import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <ul>
        {projectsData.map(
          (
            {
              title,
              subtitle,
              description,
              notes,
              githubTitle,
              githubUrl,
              webpageUrl,
            },
            index
          ) => (
            <article key={index}>
              <a href={webpageUrl} target="_blank" rel="noopener noreferrer">
                <h3 className="subtitle">{title}</h3>
              </a>
              <p>{subtitle}</p>
              <p>{description}</p>
              <p>{notes}</p>

              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <h3 className="subtitle">
                  <FontAwesomeIcon icon={faGithub} />
                  {githubTitle}
                </h3>
              </a>
            </article>
          )
        )}
      </ul>
    </div>
  );
};

export default Projects;
