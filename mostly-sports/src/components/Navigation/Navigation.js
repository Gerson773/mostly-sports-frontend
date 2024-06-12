import React, { useState } from "react";
import "../Header/Header.css";
import "../Navigation/Navigation.css";

const Navigation = ({ onLogin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navigation__container">
      <div
        className={`hamburger__menu ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        &#9776;
      </div>
      <div className={`header__signin-container ${isOpen ? "open" : ""}`}>
        <div>
          <button className="home-button" type="button" onClick={toggleMenu}>
            Home
          </button>
        </div>
        <div>
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
    </div>
  );
};

export default Navigation;
