import headerData from "../data/headerData";
import { aboutmeData } from "../data/aboutmeData";

const Hero = () => (
  <div className="hero container">
    <div className="hero-text">
      <h3>{headerData.title}</h3>
      <h1>
        Shay <span className="nowrap">Ben Ishay</span>
      </h1>
      <section className="about">
        <h2>About myself</h2>
        <p>{aboutmeData.description}</p>
      </section>
    </div>
  </div>
);

export default Hero;
