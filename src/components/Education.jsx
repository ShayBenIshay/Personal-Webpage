import { educationData } from "../data/educationData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Education = () => {
  const {
    degree,
    school,
    location,
    graduated,
    description,
    notes,
    finalProjectName,
    finalProjectUrl,
  } = educationData;
  return (
    <section id="education" className="education">
      <header>
        <h1>Education</h1>
      </header>
      <article className="container">
        <div>
          <h3>{school}</h3>
          <h2>{degree}</h2>
          <div>
            <address>{location}</address>
            <p>{graduated}</p>
          </div>
        </div>
        <div>
          <h3>Description</h3>
          <p>{description}</p>
          <h4>
            {finalProjectName}
            {": "}
          </h4>
          <p>{notes}</p>
          <a
            className="sourcecode"
            href={finalProjectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
            {" Source code"}
          </a>
        </div>
      </article>
    </section>
  );
};

export default Education;
