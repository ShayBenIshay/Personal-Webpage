import { educationData } from "../data/educationData";

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
    <div className="education">
      <h2 className="title">Education</h2>
      <article>
        <div>
          <h3 className="subtitle">{degree}</h3>
          <div>
            <p>{school}</p>
            <p>{location}</p>
            <p>{graduated}</p>
          </div>
        </div>
        <div>
          <h4>Description</h4>
          <p>{description}</p>
          <p>
            <a href={finalProjectUrl} target="_blank" rel="noopener noreferrer">
              {finalProjectName}
            </a>
            {": "}
            {notes}
          </p>
        </div>
      </article>
    </div>
  );
};

export default Education;
