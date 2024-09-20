import { skillsData } from "../data/skillsData";

const formatCategoryName = (category) => {
  return category.replace(/([A-Z])/g, " $1").trim();
};

const Skills = () => (
  <div className="container skills">
    <h1>Skills</h1>
    <article className="skills-container">
      {Object.keys(skillsData).map((category) => (
        <div className="skills-category" key={category}>
          <h2>{formatCategoryName(category)}</h2>
          <ul>
            {skillsData[category].map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </article>
  </div>
);

export default Skills;
