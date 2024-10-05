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
      <Header className="block" />
      <main className="main">
        <Hero className="container block" />
        <Experience className="container block" />
        <Projects className="container block" />
        <Education className="container block" />
        <Skills className="container block" />
        <Contact className="container block" />
      </main>
      <Footer className="block" />
      <aside className="aside">
        <h3 className="offscreen">Socials</h3>
        <Slider />
      </aside>
    </>
  );
};

export default App;
