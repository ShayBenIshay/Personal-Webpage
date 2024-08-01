import { aboutmeData } from "../data/aboutmeData";

const About = () => (
  <section className="about">
    <h2>About me</h2>
    <div className="description">{aboutmeData.description}</div>
  </section>
);

export default About;
