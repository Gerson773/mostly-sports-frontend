import React from "react";
import "../Header/Header.css";

const Navigation = ({ onLogin }) => {
  return (
    <div className="header__signin-container">
      <div>
        <button className="home-button" type="text">
          Home
        </button>
      </div>
      <div>
        <button className="signin-button" type="text" onClick={onLogin}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navigation;
