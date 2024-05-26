import React from "react";
import Header from "./Header";
import Profile from "./Profile";
// import Experience from "./content/Experience";
// import Education from "./content/Education";
// import Skills from "./content/Skills";
// import Projects from "./content/Projects";
import Content from "./Content";
import Footer from "./Footer";
import "./styles/Layout.css";

const Layout = () => {
  return (
    <>
      <div className="page">
        <Header />
        <Profile />
        <Content />
        <Footer />
      </div>
    </>
  );
};

export default Layout;

{
  /* <div className="content">
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
          <Skills
            skills={["Java", "JavaScript", "React", "git", "CSS", "HTML"]}
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
                githubUrl: "https://github.com/ShayBenIshay/CV-Webpage",
              },
            ]}
          />
        </div> */
}
