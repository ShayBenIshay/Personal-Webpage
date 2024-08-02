import headerData from "../data/headerData";
import About from "./About";

const Hero = () => (
  <>
    <div className="hero container">
      <div className="hero-text">
        <h1>{headerData.name}</h1>
        <h3>{headerData.title}</h3>
        <About />
      </div>
    </div>
  </>
);

export default Hero;
