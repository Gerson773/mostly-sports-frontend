import { Link } from "react-router-dom";
import "./Header.css";
import React, { useContext, useState } from "react";
import logo2 from "../../../src/images/mostly-sportslogo.svg";
import Navigation from "../Navigation/Navigation";

const Header = ({ onLogin }) => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo2} alt="mostly-sportslogo" className="mostly__logo" />
      </Link>
      <Navigation onLogin={onLogin} />
    </header>
  );
};

export default Header;
