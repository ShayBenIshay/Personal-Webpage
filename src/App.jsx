import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import useTitle from "./hooks/useTitle";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";

const App = () => {
  useTitle("Shay's CV Webpage");

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Experience />
        <Projects />
        <Education />
        <Skills />
      </div>
    </div>
  );
};

export default App;
