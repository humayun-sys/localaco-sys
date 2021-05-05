import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  // FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer({ isBgWhite = false }) {
  return (
    <>
      <footer
        style={{
          backgroundColor: isBgWhite ? "#FFF" : "transparent",
        }}
      >
        <div className="footer__about">
          <div className="footer__logo">
            <img src={require("../assets/img/logo.png")} alt="Logo" />
          </div>
          <p>
            Locolaco is an Indian Social Media App Developed By Qaago
            Technologies Pvt. Ltd. That encourage People to Create and Discover
            Short Entertaining & Funny Dubbed Videos
          </p>
        </div>

        <div className="footer__menu">
          <h3>Menu</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Careers">Careers</Link>
            </li>
            {/* <li>
              <Link to="/Advertise">Advertise</Link>
            </li> */}
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer__menu">
          <h3>Useful Links</h3>
          <ul>
            {/* <li>
              <Link to="/Terms-of-Services">Terms of Services</Link>
            </li> */}
            <li>
              <Link to="/Privacy-Policy">Privacy Policy</Link>
            </li>
          </ul>
          <div className="social__wrapper">
            <div className="social__icon">
              <a
                href="https://www.facebook.com/locolacoapp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </div>
            {/* <div className="social__icon">
              <a href="https//twitter.com/" target="_blank"
               rel="noopener noreferrer"
               >
                <FaTwitter />
              </a>
            </div> */}
            <div className="social__icon">
              <a
                href="https://instagram.com/locolacoapp?igshid=1i15m42pu7q72"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
            <div className="social__icon">
              <a
                href="https://www.linkedin.com/company/locolaco"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div
        className="copyright__wrapper"
        style={{
          backgroundColor: isBgWhite ? "#FFF" : "transparent",
        }}
      >
        <p>Copyright &copy; 2020 - LocoLaco - All Rights Reserved</p>
      </div>
    </>
  );
}
