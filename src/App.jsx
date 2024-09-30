import Hero from "./components/Hero/Hero";
import useTitle from "./hooks/useTitle";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Slider from "./components/Slider/Slider";
import Header from "./components/Header/Header";

const App = () => {
  useTitle("Shay's CV Webpage");
  console.log(process.env.REACT_APP_WEB3FORMS_KEY);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
        <aside>
          <h3 className="offscreen">Socials</h3>
          <Slider />
        </aside>
      </main>
      <Footer />
    </>
  );
};

export default App;
