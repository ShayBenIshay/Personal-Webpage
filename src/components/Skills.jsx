import { skillsData } from "../data/skillsData";

const formatCategoryName = (category) => {
  return category.replace(/([A-Z])/g, " $1").trim();
};

const Skills = () => (
  <div className="skills">
    <h2 className="title">Skills</h2>
    <article>
      {Object.keys(skillsData).map((category) => (
        <div key={category}>
          <h3 className="subtitle">{formatCategoryName(category)}</h3>
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
