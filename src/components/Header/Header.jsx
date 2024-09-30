import "./header.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className="header">
      <h1 className="offscreen">Shay Ben Ishay Personal Webpage</h1>
      <Navbar />
    </header>
  );
};

export default Header;
