import { experienceData } from "../data/experienceData";

const Experience = () => {
  const jobsArr = experienceData.jobs;

  return (
    <div className="container experience">
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
                <h2>
                  {title} at {company}
                </h2>
                <h3>
                  {date}, {type}
                </h3>
                <p>{notes}</p>

                <div className="responsibilities">
                  <h4>Responsibilities:</h4>
                  <p>{responsibilities}</p>
                  <h4>Description</h4>
                  <p>{description}</p>
                </div>
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
