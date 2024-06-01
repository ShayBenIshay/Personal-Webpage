import React from "react";
import Header from "./Header";
import Profile from "./Profile";
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
