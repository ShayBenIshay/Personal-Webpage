import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import useTitle from "./hooks/useTitle";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Slider from "./components/Slider";

const App = () => {
  useTitle("Shay's CV Webpage");
  console.log(process.env.REACT_APP_WEB3FORMS_KEY);

  return (
    <div className="page">
      <Slider />
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
