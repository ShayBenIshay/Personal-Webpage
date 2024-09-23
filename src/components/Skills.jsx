import { skillsData } from "../data/skillsData";

const formatCategoryName = (category) => {
  return category.replace(/([A-Z])/g, " $1").trim();
};

const Skills = () => (
  <section className="skills">
    <header>
      <h1>Skills</h1>
    </header>
    <article className="container skills-container">
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
  </section>
);

export default Skills;
