import headerData from "../../data/headerData";
import "./hero.css";

const Hero = () => (
  <article id="hero" className="hero fullpage">
    <h3 className="hero__h3">{headerData.title}</h3>
    <h1 className="hero__h1">
      Shay <span className="nowrap">Ben Ishay</span>
    </h1>
    <section className="hero__section about">
      <h2 className="hero__h2">About myself</h2>
      <p className="hero__p">
        <em>Technion - Israel Institute of Technology</em> Alumnus, with B.Sc in
        Computer Science field. Skilled software developer with great algorithms
        and data structures knowledge and excellent problems solving abilities.
        Passionate about developing awesome apps from scratch. Loves a challenge
        and quick to adapt to new topics.
      </p>
    </section>
  </article>
);

export default Hero;
