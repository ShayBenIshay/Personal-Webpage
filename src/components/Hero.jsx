import headerData from "../data/headerData";
import About from "./About";

const Hero = () => (
  <>
    <div className="hero container first-element">
      <div className="hero-text">
        <h3>{headerData.title}</h3>
        <h1 className="hero-title">{headerData.name}</h1>
        <About />
      </div>
    </div>
  </>
);

export default Hero;
