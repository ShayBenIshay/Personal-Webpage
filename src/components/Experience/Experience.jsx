import { experienceData } from "../../data/experienceData";
import "./experience.css";

const Experience = () => {
  const jobsArr = experienceData.jobs;

  return (
    <article id="experience" className="experience">
      <h1 className="experience__h1">Experience</h1>

      {jobsArr.map(
        ({
          title,
          company,
          date,
          type,
          responsibilities,
          descriptionOne,
          descriptionTwo,
          notes,
        }) => (
          <section
            key={title + "-" + company}
            className="container smallpage experience__job"
          >
            <div className="job__details">
              <h2>
                {title} @ {company}, {type},<time dateTime={date}> {date}</time>
              </h2>

              <div className="job__description">
                <p>{descriptionOne}</p>
                {descriptionTwo && <p>{descriptionTwo}</p>}

                <ul className="job__ul">
                  {responsibilities.split(". ").map((item, index) => (
                    <li key={index} className="job__li">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {notes && (
              <div className="job__notes">
                <aside>
                  <details>
                    <summary className="aside__summary">
                      Additional Notes
                    </summary>
                    <p>{notes}</p>
                  </details>
                </aside>
              </div>
            )}
          </section>
        )
      )}
    </article>
  );
};

export default Experience;
