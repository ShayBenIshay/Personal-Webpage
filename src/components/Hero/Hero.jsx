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
        <em>Technion - Israel Institute of Technology</em> Alumnus B.Sc in
        Computer Science. Sharp software developer with excellent problem
        solving skills and outstanding self learning abilities. Passionate about
        new technologies and developing software from scratch. Loves a challenge
      </p>
    </section>
  </article>
);

export default Hero;
