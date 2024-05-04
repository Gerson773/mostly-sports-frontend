import { Link } from "react-router-dom";
import "./Header.css";
import React, { useContext, useState } from "react";
import logo2 from "../../../src/images/mostly-sportslogo.svg";

const Header = ({}) => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo2} alt="mostly-sportslogo" className="mostly__logo" />
      </Link>

      <div className="header__signin-container">
        <div>
          <button className="home-button" type="text">
            Home
          </button>
        </div>
        <div>
          <button className="signin-button" type="text">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
