import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { projectsData } from "../../data/projectsData";
import "./projects.css";

const Projects = () => {
  return (
    <article id="projects" className="projects">
      <h1 className="projects__h1">Projects</h1>
      <section className="container fullpage">
        <dl className="projects__dl">
          {projectsData.map(
            (
              { title, subtitle, description, notes, githubUrl, webpageUrl },
              index
            ) => (
              <section className="section__section" key={index}>
                <dt>
                  <h2 className="">
                    {title + " ("}
                    <span className="">
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
                  <p className="wrap">{description}</p>
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
      </section>
    </article>
  );
};

export default Projects;
