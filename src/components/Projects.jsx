import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  return (
    <div className="projects third-element">
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
                <p className="title">{title}</p>
              </a>
              <p>{subtitle}</p>
              <p>{description}</p>
              <p>{notes}</p>

              <a
                className="sourcecode"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
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
