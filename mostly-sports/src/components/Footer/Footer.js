import React from "react";
import "./Footer.css";
import icon1 from "../../../src/images/x_icon.svg";
import { Link } from "react-router-dom";
import FooterTicker from "../FooterTicker/FooterTicker";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__ticker-container">
        <FooterTicker />
      </div>
      <div className="footer__content">
        <div className="footer__copyright-container">
          <p className="footer__copyright">&copy; Mostly Sports 2024</p>
        </div>
        <div className="footer__icons-container">
          <div>
            <button className="home__button-footer" type="text">
              Home
            </button>
            <button className="tripleten__button-footer" type="text">
              TripleTen
            </button>
          </div>
          <Link to="/">
            <img src={icon1} alt="x-icon" className="x__icon" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
