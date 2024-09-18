import { experienceData } from "../data/experienceData";

const Experience = () => {
  const jobsArr = experienceData.jobs;

  return (
    <div className="experience second-element">
      <h1>Experience</h1>
      <article>
        {jobsArr.map(
          ({
            title,
            company,
            date,
            type,
            responsibilities,
            description,
            routine,
            notes,
          }) => (
            <div key={title + "-" + company} className="job">
              <div className="job-info">
                <h3 className="subtitle">
                  {title} at {company}
                </h3>
                <p>
                  {date}, {type}
                </p>
                <p>{notes}</p>

                <div className="responsibilities">
                  <h4>Responsibilities:</h4>
                  <p>{responsibilities}</p>
                </div>
                <h4>Description</h4>
                <p>{description}</p>
              </div>
              <div className="routine">
                <h4>Work Routine:</h4>
                <ul>
                  {routine.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          )
        )}
      </article>
    </div>
  );
};

export default Experience;
