import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

// import payme from "../../assets/icons/payme-logo.svg"

function Footer() {
  const { t, i18n } = useTranslation(); // or const [t, i18n] = useTranslation();
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <Link to="/" style={{ color: "black" }}>
            <h4 className="footer-logo" style={{ fontWeight: 600 }}>
              Vego-travel <small>{t("footer.company")}</small>
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
            <div className="footer-links-title">{t("footer.company")}</div>
            <ul className="footer-links-list">
              <li>
                <Link to="/">{t("footer.company-about")}</Link>
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
            <div className="footer-links-title">{t("footer.Tafsilotlar")}</div>
            <ul className="footer-links-list">
              <li>
                <Link to="/packages">{t("footer.Services")}</Link>
              </li>
              <li>
                <Link to="/contact">{t("footer.info-footer")}</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-links-title">{t("footer.To'lov usuli")}</div>
            <ul className="footer-links-list">
              <li>
                <Link to="/offer">{t("footer.Payme")}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            {t("footer.builder")}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
