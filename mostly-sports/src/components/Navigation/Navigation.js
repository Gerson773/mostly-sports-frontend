import React, { useState } from "react";
import "../Header/Header.css";
import "../Navigation/Navigation.css";

const Navigation = ({ onLogin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navigation__container">
      <div
        className={`hamburger__menu ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        &#9776;
      </div>
      <div className={`header__signin-container ${isOpen ? "open" : ""}`}>
        <div className="button__container">
          <button className="home-button" type="button" onClick={toggleMenu}>
            Home
          </button>
        </div>
        <div className="button__container">
          <button
            className="signin-button"
            type="button"
            onClick={() => {
              onLogin();
              toggleMenu();
            }}
          >
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
