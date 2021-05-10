import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="logo" className="logo"></img>
          <h2 className="left">Football predictor</h2>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
