import Header from "./components/Header";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <div className="main-content">
          <Profile />
          <Experience />
          <Education
            degrees={[
              {
                degree: "BSc Computer Science",
                school: "Technion - Israel Institute of Technology",
                year: "2021",
              },
            ]}
          />
          <Projects
            projects={[
              {
                title: "Smart Investor",
                description:
                  "SmartInvestor: Intelligent Investment Management Platform.",
                elaboration:
                  "Trade History tracking. Porfolio managing. Connected to Polygon API with last day closing rates",
                code: "the code was written in plain Javascript + HTML + CSS",
                githubUrl: "https://github.com/ShayBenIshay/Smart-Investor",
              },
              {
                title: "CV Website",
                description: "Interactive way to show my CV",
                // elaboration: "",
                code: "The project was developed using React.js along with JavaScript and CSS.",
                githubUrl: "",
              },
            ]}
          />
        </div>
        <div className="sidebar">
          <Skills skills={["JavaScript", "React", "git", "CSS", "HTML"]} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
