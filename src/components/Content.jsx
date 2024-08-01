import { Outlet } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const Content = () => {
  useTitle(`Shay's CV: Content`);

  const content = (
    <section className="welcome">
      <p>cv content</p>
    </section>
  );

  return content;
};
export default Content;
