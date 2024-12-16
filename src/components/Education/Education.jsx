import { educationData } from "../../data/educationData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./education.css";

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
    <article id="education" className="education">
      <h1 className="education__h1">Education</h1>
      <section className="container fullpage">
        <h2>{degree}</h2>
        <h3>{school}</h3>
        <address className="second--indent">{location}</address>
        <p>
          Graduated: <time dateTime={graduated}>{graduated}</time>
        </p>
        <section className="education__description">
          <h3>Description</h3>
          <p>{description}</p>
          <h4>
            {finalProjectName}
            {": "}
          </h4>
          <aside>
            <details>
              <h4>
                <a
                  className="container__a sourcecode"
                  href={finalProjectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  {" Source code"}
                </a>
              </h4>
              <summary></summary>
              <p>
                a <strong>Machine Learning</strong> project. we started with a
                model that detects Anomal Behaviour. We trained it over 2GB of
                Security Camera Data.
                {/* We managed to obtain data with the help of <add credits> that shared with us 2GB of classified videos of Fight/Nofight Security Camera Footage */}
                This Data was processed with a pose-estimation model to inhence
                the Data with focus on the people in the Security Camera
                footage. at this point we trained our model our DB
                {/* using <add the model training method> */}
                to the final result of 80% success which demonstrated the
                ability of the model to achieve very high results with more
                data,training and tuning the model
              </p>
              <p>{notes}</p>
            </details>
          </aside>
        </section>
      </section>
    </article>
  );
};

export default Education;
