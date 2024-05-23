import React from "react";
import "./styles/Education.css";

const Education = ({ degrees }) => (
  <section className="education">
    <h2>Education</h2>
    <ul>
      {degrees.map((degree, index) => (
        <li key={index}>
          <h3>{degree.degree}</h3>
          <p>
            {degree.school}, {degree.year}
          </p>
        </li>
      ))}
    </ul>
  </section>
);

export default Education;
