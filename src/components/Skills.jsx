import React from "react";
import "./styles/Skills.css";

const Skills = ({ skills }) => (
  <div className="skills-sidebar">
    <h2>Skills</h2>
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

export default Skills;

// import React from "react";
// import "./styles/Skills.css";

// const Skills = ({ skills }) => (
//   <section className="skills">
//     <h2>Skills</h2>
//     <ul>
//       {skills.map((skill, index) => (
//         <li key={index}>{skill}</li>
//       ))}
//     </ul>
//   </section>
// );

// export default Skills;
