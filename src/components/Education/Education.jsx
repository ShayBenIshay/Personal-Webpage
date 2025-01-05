import { educationData } from "../../data/educationData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./education.css";

const Education = () => {
  const {
    degree,
    school,
    location,
    date,
    description,
    notes,
    finalProjectName,
    finalProjectUrl,
  } = educationData;

  return (
    <article id="education" className="education">
      <h1 className="education__h1">Education</h1>

      <section className="container">
        <div className="education__details">
          <h2>
            {degree}, {school},
            <span className="education__location-date">
              <address>{location}</address>,
            </span>{" "}
            <span className="education__location-date">
              <time dateTime={date}>{date}</time>
            </span>
          </h2>
        </div>
        <section>
          <p>{description}</p>
          <aside>
            <details>
              <summary className="aside__summary">
                Final Project: {finalProjectName}
              </summary>

              <div>
                <p>
                  A machine learning project focused on anomaly detection. The
                  model was trained on 2GB of security camera data using
                  pose-estimation to enhance focus on human subjects. The final
                  model achieved 80% accuracy, showing potential for even better
                  results with additional data and tuning.
                </p>
                <a
                  className="container__a"
                  href={finalProjectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View source code for ${finalProjectName} on GitHub`}
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <span> Source code</span>
                </a>
                {notes && <p>{notes}</p>}
              </div>
            </details>
          </aside>
        </section>
      </section>
    </article>
  );
};

export default Education;
