import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import "../../App/App.css";

function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
