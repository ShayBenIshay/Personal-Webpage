import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { projectsData } from "../../data/projectsData";
import "./projects.css";

const Projects = () => {
  const formatDescription = (description) => {
    return description.split("\n").map((line, index) => (
      <p key={index} className="wrap project__description-line">
        {line.trim()}
      </p>
    ));
  };

  const {
    title: title0,
    subtitle: subtitle0,
    description: description0,
    githubUrl: githubUrl0,
    webpageUrl: webpageUrl0,
  } = projectsData[0];

  const {
    title: title1,
    subtitle: subtitle1,
    description: description1,
    githubUrl: githubUrl1,
    webpageUrl: webpageUrl1,
  } = projectsData[1];

  const {
    title: title2,
    subtitle: subtitle2,
    description: description2,
    githubUrl: githubUrl2,
  } = projectsData[2];

  return (
    <article id="projects" className="projects">
      <h1 className="projects__h1">Projects</h1>

      <section className="container fullpage">
        <dl className="projects__dl">
          <section className="project__section">
            <dt>
              <h2>{title0}</h2>
            </dt>
            <dd className="project__content">
              <h3>{subtitle0}</h3>
              <div className="project__description">
                {formatDescription(description0)}
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
                <a
                  className="container__a"
                  href={webpageUrl0}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try it out
                </a>
              </div>
            </dd>
          </section>

          <section className="project__section">
            <dt>
              <h2>{title1}</h2>
            </dt>
            <dd className="project__content">
              <h3>{subtitle1}</h3>
              <div className="project__description">
                {formatDescription(description1)}
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
                <a
                  className="container__a"
                  href={webpageUrl1}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try it out
                </a>
              </div>
            </dd>
          </section>

          <section className="project__section">
            <dt>
              <h2>{title2}</h2>
            </dt>
            <dd className="project__content">
              <h3>{subtitle2}</h3>
              <div className="project__description">
                {formatDescription(description2)}
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
