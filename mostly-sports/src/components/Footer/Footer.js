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
            <Link to="/" className="home__button-footer">
              Home
            </Link>
            <a
              href="https://tripleten.com"
              className="tripleten__button-footer"
              target="_blank"
              rel="noopener noreferrer"
            >
              TripleTen
            </a>
          </div>
          <a
            href="https://x.com/gersong773"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icon1} alt="x-icon" className="x__icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
