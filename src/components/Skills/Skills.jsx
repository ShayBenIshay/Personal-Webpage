import { skillsData } from "../../data/skillsData";
import "./skills.css";

const formatCategoryName = (category) => {
  return category.replace(/([A-Z])/g, " $1").trim();
};

const Skills = () => (
  <article id="skills" className="skills">
    <h1 className="skills__h1">Skills</h1>
    <section className="smallpage skills__section">
      {Object.keys(skillsData).map((category) => (
        <dl className="skills__dl" key={category}>
          <dd>
            <h2 className="nowrap">{formatCategoryName(category)}</h2>
          </dd>
          <dt className="skills_dt">
            <ul>
              {skillsData[category].map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </dt>
        </dl>
      ))}
    </section>
  </article>
);

export default Skills;
