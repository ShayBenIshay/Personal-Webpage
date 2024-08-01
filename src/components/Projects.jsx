import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="title">Projects</h2>
      <ul>
        {projectsData.map(
          (
            { title, subtitle, description, notes, webpageUrl, webpageTitle },
            index
          ) => (
            <article key={index}>
              <h3 className="subtitle">{title}</h3>
              <p>{subtitle}</p>
              <p>{description}</p>
              <p>{notes}</p>
              <a href={webpageUrl} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} /> {webpageTitle}
              </a>
            </article>
          )
        )}
      </ul>
    </div>
  );
};

export default Projects;
