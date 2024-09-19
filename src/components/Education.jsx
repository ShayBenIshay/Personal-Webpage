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
    <div className="container education">
      <h1>Education</h1>
      <article>
        <div>
          <h3>{school}</h3>
          <h2>{degree}</h2>
          <div>
            <p>{location}</p>
            <p>{graduated}</p>
          </div>
        </div>
        <div>
          <h3>Description</h3>
          <p>{description}</p>
          <h4>
            {finalProjectName}
            {": "}
          </h4>
          <p>{notes}</p>
          <a href={finalProjectUrl} target="_blank" rel="noopener noreferrer">
            Source code
          </a>
        </div>
      </article>
    </div>
  );
};

export default Education;
