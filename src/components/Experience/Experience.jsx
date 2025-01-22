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
          additionalData,
          websiteOne,
          websites,
        }) => (
          <section
            key={title + "-" + company}
            className="container smallpage experience__job"
          >
            <div className="job__details">
              <h2>
                {title} @ {company}, {type},<time dateTime={date}> {date}</time>
                {additionalData && (
                  <>
                    {" - "}
                    <a
                      href={additionalData}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="animated-link"
                    >
                      Business Website
                    </a>
                  </>
                )}
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

            {/* Websites/Projects Container */}
            {websites && websites.length > 0 && (
              <div className="job__websites-container">
                {websites.map(({ url, title, description, tech }, index) => (
                  <article key={index} className="job__website">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <h3>{title}</h3>
                      <p>{description}</p>
                      <small>{tech}</small>
                    </a>
                  </article>
                ))}
              </div>
            )}
          </section>
        )
      )}
    </article>
  );
};

export default Experience;
