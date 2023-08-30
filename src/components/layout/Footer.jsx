import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <Link to="/" style={{ color: "black" }}>
            <h4 className="footer-logo" style={{ fontWeight: 600 }}>
              Vego-travel <small>Company</small>
            </h4>
          </Link>
          <div className="footer-social">
            <Link to={"https://www.facebook.com/profile.php?id=61550935043546&mibextid=9R9pXO"}>
              <i className="ri-facebook-fill"></i>
            </Link>
            <Link to={"https://t.me/vego_travel"}>
              <i className="ri-telegram-fill"></i>
            </Link>
            <Link to={"https://www.instagram.com/vego.travel"}>
              <i className="ri-instagram-fill"></i>
            </Link>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <div className="footer-links-title">Company</div>
            <ul className="footer-links-list">
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to={"tel:+998337110885"}>+998 33 711 08 85</Link>
              </li>
              <li>
                <Link to={"https://t.me/vego_travel"}>@vego-travel</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-links-title">Details</div>
            <ul className="footer-links-list">
              <li>
                <Link to="/packages">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact | Info</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-links-title">Price Details</div>
            <ul className="footer-links-list">
              <li>
                <Link to="/offer">Paymee</Link>
              </li>
              <li>
                <Link to="/offer">Click</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © 2023 Vego-travel, company. All Rights Reserved. Updeted(08/2023).
            Builder Warnigo and Mukam.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
