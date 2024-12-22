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
            className="container fullpage experience__job job"
          >
            <div className="job__details">
              <h2>
                {title} @ {company}
              </h2>
              <h3>
                {date}, {type}
              </h3>

              <div className="job__responsibilities">
                <h4>Description</h4>
                <p>{descriptionOne}</p>
                <p>{descriptionTwo}</p>
                <h4>Responsibilities:</h4>
                <p>{responsibilities}</p>
              </div>
            </div>
            <div className="job__routine">
              <aside className="aside">
                <details>
                  <summary></summary>
                  <p>{notes}</p>
                </details>
              </aside>
            </div>
          </section>
        )
      )}
    </article>
  );
};

export default Experience;
