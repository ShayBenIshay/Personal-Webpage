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
        new technologies and building software from the ground up, thriving on
        challenges.
      </p>
      <br></br>
      <p className="hero__p">
        Seeking a dynamic small team environment to build products from the
        ground up. Eager to wear multiple hats and make meaningful contributions
        that shape the product's direction and success.
      </p>
    </section>
  </article>
);

export default Hero;
