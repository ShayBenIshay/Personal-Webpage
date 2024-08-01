import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const Welcome = () => {
  useTitle("Shay's CV");

  const date = new Date();
  const today = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);

  const content = (
    <section className="welcome">
      <p>{today}</p>
      <h1>
        Welcome! This is <span className="nowrap">My CV Webpage!</span>
      </h1>
      <main className="welcome__main">
        <p>The online way to present my React skills.</p>
        <br />
        <p>Owner: Shay Ben Ishay</p>

        <p>
          <Link to="/aboutme">About myselft</Link>
        </p>
        <p>
          <Link to="/experience">experience</Link>
        </p>
        <p>
          <Link to="/projects">projects</Link>
        </p>
        <p>
          <Link to="/education">education</Link>
        </p>
        <p>
          <Link to="/skills">skills</Link>
        </p>
        <p>
          <Link to="/pdf">pdf</Link>
        </p>
      </main>
    </section>
  );
  return content;
};
export default Welcome;
