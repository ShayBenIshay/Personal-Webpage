import { skillsData } from "../../data/skillsData";
import "./skills.css";

const Skills = () => {
  return (
    <article id="skills" className="skills">
      <h1 className="skills__h1">Skills</h1>

      <section className="skills__section">
        {Object.keys(skillsData).map((category) => (
          <dl className="skills__dl" key={category}>
            <dd className="skills__dd">
              <h2>{category}</h2>
            </dd>

            <dt className="skills__dt">
              <ul className="skills__ul">
                {skillsData[category].map((skill, index) => (
                  <li className="skills__li" key={index}>
                    {skill}
                  </li>
                ))}
              </ul>
            </dt>
          </dl>
        ))}
      </section>
    </article>
  );
};

export default Skills;
