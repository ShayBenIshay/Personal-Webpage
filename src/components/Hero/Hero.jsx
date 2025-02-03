import headerData from "../../data/headerData";
import "./hero.css";

const Hero = () => (
  <article id="hero" className="hero fullpage">
    <header className="hero__header">
      <h3 className="hero__title animate-fade-in">{headerData.title}</h3>
      <h1 className="hero__name animate-slide-in">Shay Ben Ishay</h1>
    </header>

    <section className="hero__section">
      <h2 className="hero__subtitle center animate-fade-in">About myself</h2>

      <div className="hero__content animate-fade-in">
        <p className="hero__text">
          <em>Technion - Israel Institute of Technology</em> graduate with a
          B.Sc in Computer Science. Sharp software developer combining strong
          analytical thinking with outstanding self-learning capabilities. Quick
          to master new technologies and frameworks while maintaining a deep
          understanding of fundamentals.
        </p>

        <p className="hero__text">
          Passionate about joining a startup environment where I can contribute
          across the entire tech stack. Eager to work with diverse technologies
          while building products from the ground up, and make meaningful
          contributions that shape the product direction.
        </p>
      </div>
    </section>
  </article>
);

export default Hero;
