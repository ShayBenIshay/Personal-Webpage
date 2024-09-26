import headerData from "../data/headerData";
// import { aboutmeData } from "../data/aboutmeData";

const Hero = () => (
  <section id="hero" className="hero">
    <div className="container">
      <div className="hero-text">
        <h3>{headerData.title}</h3>
        <h1>
          Shay <span className="nowrap">Ben Ishay</span>
        </h1>
        <section className="about">
          <h2>About myself</h2>
          <p>
            <em>Technion - Israel Institute of Technology</em> Alumnus, with
            B.Sc in Computer Science field. Skilled software developer with
            great algorithms and data structures knowledge and excellent
            problems solving abilities. Passionate about developing awesome apps
            from scratch. Loves a challenge and quick to adapt to new topics.
          </p>
        </section>
      </div>
    </div>
  </section>
);

export default Hero;
