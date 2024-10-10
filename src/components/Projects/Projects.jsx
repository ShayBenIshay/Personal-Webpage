import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { projectsData } from "../../data/projectsData";
import "./projects.css";

const Projects = () => {
  const {
    title: title0,
    subtitle: subtitle0,
    description: description0,
    notes: notes0,
    githubUrl: githubUrl0,
    webpageUrl: webpageUrl0,
  } = projectsData[0];
  const {
    title: title1,
    subtitle: subtitle1,
    description: description1,
    notes: notes1,
    githubUrl: githubUrl1,
    webpageUrl: webpageUrl1,
  } = projectsData[1];

  return (
    <article id="projects" className="projects">
      <h1 className="projects__h1">Projects</h1>
      <section className="container fullpage">
        <dl className="projects__dl">
          <section className="project__section">
            <dt>
              <h2 className="">
                {title0 + " ("}
                <span className="">
                  <a
                    className="container__a"
                    href={webpageUrl0}
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
              <h3>{subtitle0}</h3>
              <p className="wrap">{description0}</p>
              <aside className="aside">
                <h4>
                  <a
                    className="container__a sourcecode"
                    href={githubUrl0}
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
                  <p>{notes0}</p>
                </details>
              </aside>
            </dd>
          </section>

          <section className="project__section">
            <dt>
              <h2 className="">
                {title1 + " ("}
                <span className="">
                  <a
                    className="container__a"
                    href={webpageUrl1}
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
              <h3>{subtitle1}</h3>
              <p className="wrap">{description1}</p>
              <aside className="aside">
                <h4>
                  <a
                    className="container__a sourcecode"
                    href={githubUrl1}
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
                  <p>{notes1}</p>
                </details>
              </aside>
            </dd>
          </section>
        </dl>
      </section>
    </article>
  );
};

export default Projects;
