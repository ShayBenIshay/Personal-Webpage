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
    <div className="education fourth-element">
      <h1>Education</h1>
      <article>
        <div>
          <p className="subtitle">{school}</p>
          <h3 className="subtitle">{degree}</h3>
          <div>
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
