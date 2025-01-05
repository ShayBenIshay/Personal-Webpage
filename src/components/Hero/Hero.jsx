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
          <em>Technion - Israel Institute of Technology</em> Alumnus B.Sc in
          Computer Science. Sharp software developer with excellent problem
          solving skills and outstanding self learning abilities. Passionate
          about new technologies and building software from the ground up and
          thriving on challenges.
        </p>

        <p className="hero__text">
          Seeking a dynamic small team environment to build products from the
          ground up. Eager to wear multiple hats and make meaningful
          contributions that shape the product's direction and success.
        </p>
      </div>
    </section>
  </article>
);

export default Hero;
