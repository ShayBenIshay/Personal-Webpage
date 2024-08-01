import { experienceData } from "../data/experienceData";

const Experience = () => {
  const jobsArr = experienceData.jobs;

  return (
    <div className="experience">
      <h2 className="title">Experience</h2>
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
                <div className="responsibilities">
                  <h4>Responsibilities:</h4>
                  <p>{responsibilities}</p>
                </div>
                <p>{notes}</p>
                <h4>Description</h4>
                <p>{description}</p>
              </div>
              <div className="routine">
                <h4>Daily Routine:</h4>
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
