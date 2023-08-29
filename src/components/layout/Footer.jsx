import React from 'react';
import './Footer.scss'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <Link to="/" style={{ color: 'black' }}>
            <h4 className='footer-logo' style={{ fontWeight: 600 }}>
              Vego-travel <small>Company</small>
            </h4>
          </Link>
          <div className="footer-social">
            <Link to={""}><i className="ri-facebook-fill"></i></Link>
            <Link to={""}><i className="ri-telegram-fill"></i></Link>
            <Link to={""}><i className="ri-twitter-fill"></i></Link>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <div className="footer-links-title">Company</div>
            <ul className="footer-links-list">
              <li><Link to="/">About</Link></li>
              <li><Link to={""}>+998 90 000 00 00</Link></li>
              <li><Link to={"https://t.me/nickname"}>@nickname</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-links-title">Details</div>
            <ul className="footer-links-list">
              <li><Link to="/packages">Services</Link></li>
              <li><Link to="/contact">Contact | Info</Link></li>
              
            </ul>
          </div>
          <div>
            <div className="footer-links-title">Price Details</div>
            <ul className="footer-links-list">
              <li><Link to="/offer">Paymee</Link></li>
              <li><Link to="/offer">Click</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 Vego-travel, company. All Rights Reserved. Updeted(08/2023). Builder Warnigo.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
