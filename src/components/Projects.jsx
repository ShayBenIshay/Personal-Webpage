import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  return (
    <div className="container projects">
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
              <h2>
                {title + " ("}
                <a href={webpageUrl} target="_blank" rel="noopener noreferrer">
                  app url
                  {/* <p className="title">{title}</p> */}
                </a>
                {")"}
              </h2>
              <h3>{subtitle}</h3>
              <p>{description}</p>
              <p>{notes}</p>
              <h4>
                <a
                  className="sourcecode"
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  {" " + githubTitle}
                </a>
              </h4>
            </article>
          )
        )}
      </ul>
    </div>
  );
};

export default Projects;
