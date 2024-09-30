import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { projectsData } from "../../data/projectsData";
import "./projects.css";

const Projects = () => {
  return (
    <article id="projects" className="projects">
      <h1 className="projects__h1">Projects</h1>
      <dl className="container">
        {projectsData.map(
          (
            { title, subtitle, description, notes, githubUrl, webpageUrl },
            index
          ) => (
            <section className="projects__section" key={index}>
              <dt>
                <h2>
                  {title + " ("}
                  <span className="nowrap">
                    <a
                      className="container__a"
                      href={webpageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      app url
                    </a>
                    {")"}
                  </span>
                </h2>
              </dt>
              <dd>
                <h3>{subtitle}</h3>
                <p>{description}</p>
                <aside className="aside">
                  <h4>
                    <a
                      className="container__a sourcecode"
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      Source Code
                    </a>
                  </h4>
                  <details>
                    <summary className="aside__summary">
                      <em>Notes</em>
                    </summary>
                    <p>{notes}</p>
                  </details>
                </aside>
              </dd>
            </section>
          )
        )}
      </dl>
    </article>
  );
};

export default Projects;
