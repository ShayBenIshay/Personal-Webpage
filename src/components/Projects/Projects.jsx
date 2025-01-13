import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { projectsData } from "../../data/projectsData";
import "./projects.css";

const Projects = () => {
  const formatText = (text) => {
    return text.split("\n").map((line, index) => {
      const [firstWord, ...rest] = line.split(" ");
      return (
        <p key={index} className="wrap project__description-line">
          <strong>{firstWord} </strong>
          {rest.join(" ").trim()}
        </p>
      );
    });
  };

  const {
    title: title0,
    subtitle: subtitle0,
    features: features0,
    frontend: frontend0,
    backend: backend0,
    githubUrl: githubUrl0,
    webpageUrl: webpageUrl0,
  } = projectsData[0];

  const {
    title: title1,
    subtitle: subtitle1,
    features: features1,
    frontend: frontend1,
    backend: backend1,
    githubUrl: githubUrl1,
    webpageUrl: webpageUrl1,
  } = projectsData[1];

  const {
    title: title2,
    subtitle: subtitle2,
    features: features2,
    frontend: frontend2,
    backend: backend2,
    githubUrl: githubUrl2,
  } = projectsData[2];

  return (
    <article id="projects" className="projects">
      <h1 className="projects__h1">Projects</h1>

      <section className="container fullpage">
        <dl className="projects__dl">
          <section className="project__section">
            <dt>
              <h2>
                {title0}, {subtitle0}.
                {webpageUrl0 && (
                  <>
                    {" - "}
                    <a
                      href={webpageUrl0}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Smart Investor
                    </a>
                  </>
                )}
              </h2>
            </dt>
            <dd className="project__content">
              <div className="project__description">
                {features0 && <div>{formatText(features0)}</div>}
                {frontend0 && <div>{formatText(frontend0)}</div>}
                {backend0 && <div>{formatText(backend0)}</div>}
              </div>
              <div className="project__links">
                <a
                  className="container__a sourcecode"
                  href={githubUrl0}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <span> Source Code</span>
                </a>
              </div>
            </dd>
          </section>

          <section className="project__section">
            <dt>
              <h2>
                {title1}, {subtitle1}.
                {webpageUrl1 && (
                  <>
                    {" - "}
                    <a
                      href={webpageUrl1}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Matrix Agent Web Service
                    </a>
                  </>
                )}
              </h2>
            </dt>
            <dd className="project__content">
              <div className="project__description">
                {features1 && <div>{formatText(features1)}</div>}
                {frontend1 && <div>{formatText(frontend1)}</div>}
                {backend1 && <div>{formatText(backend1)}</div>}
              </div>
              <div className="project__links">
                <a
                  className="container__a sourcecode"
                  href={githubUrl1}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <span> Source Code</span>
                </a>
              </div>
            </dd>
          </section>

          <section className="project__section">
            <dt>
              <h2>
                {title2}, {subtitle2}.
              </h2>
            </dt>
            <dd className="project__content">
              <div className="project__description">
                {features2 && <div>{formatText(features2)}</div>}
                {frontend2 && <div>{formatText(frontend2)}</div>}
                {backend2 && <div>{formatText(backend2)}</div>}
              </div>
              <div className="project__links">
                <a
                  className="container__a sourcecode"
                  href={githubUrl2}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <span> Source Code</span>
                </a>
              </div>
            </dd>
          </section>
        </dl>
      </section>
    </article>
  );
};

export default Projects;
