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
        <h2>{degree}</h2>
        <h3>{school}</h3>

        <address>{location}</address>

        <p>
          Graduated: <time dateTime={date}>{date}</time>
        </p>

        <section>
          <h3>Description</h3>
          <p>{description}</p>

          <h4>Final Project</h4>
          <aside>
            <details>
              <summary className="aside__summary">{finalProjectName}</summary>

              <div>
                <h4>
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
                </h4>

                <p>
                  A machine learning project focused on anomaly detection. The
                  model was trained on 2GB of security camera data using
                  pose-estimation to enhance focus on human subjects. The final
                  model achieved 80% accuracy, showing potential for even better
                  results with additional data and tuning.
                </p>

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
