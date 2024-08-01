import { aboutmeData } from "../data/aboutmeData";

const About = () => (
  <section className="about">
    <h2>About myself</h2>
    <div className="description">{aboutmeData.description}</div>
  </section>
);

export default About;
