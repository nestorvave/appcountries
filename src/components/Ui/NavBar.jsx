import React from "react";
import { Link } from "react-router-dom";
import './navBar.scss'

export const NavBar = () => {
  return (
    <nav className="navBar dark_bar">
      <Link to="/" className="navBar_Topic dark_link" >Where in the world?</Link>
      <p>Mode</p>
    </nav>
  );
};
