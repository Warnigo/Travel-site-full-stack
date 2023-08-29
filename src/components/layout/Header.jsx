import React, { useEffect, useState } from "react";
import { request } from "../../server/server";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    // Server request
    request
      .get("country")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Ma'lumotlarni olishda xatolik yuz berdi:", error);
      });
    // Server request End

    // Navbar submenu functionality
    const navbarSubmenus = document.querySelectorAll(
      '[data-toggle~="navbar-submenu-content"]'
    );
    navbarSubmenus.forEach((el) => {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        const submenuWrapper = this.closest(".navbar-submenu-wrapper");
        submenuWrapper
          .querySelectorAll('[data-toggle~="navbar-submenu"]')
          .forEach((item) => {
            item.classList.remove("active");
          });
        this.classList.add("active");
        submenuWrapper
          .querySelectorAll(".navbar-submenu-content-wrapper")
          .forEach((item) => {
            item.classList.remove("active");
          });
        document.querySelector(this.dataset.target).classList.add("active");
      });
    });

    const navbarToggle = document.querySelector(".navbar-toggle");
    navbarToggle.addEventListener("click", function (e) {
      e.preventDefault();
      document
        .querySelector(".nav-menu-wrapper")
        .classList.add("navbar-active");
    });

    const navbarSubmenuDismiss = document.querySelectorAll(
      '[data-dismiss="navbar-submenu"]'
    );
    navbarSubmenuDismiss.forEach((el) => {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        this.closest(".navbar-active").classList.remove("navbar-active");
      });
    });

    const navbarMenuDismiss = document.querySelectorAll(
      '[data-dismiss="navbar-menu"]'
    );
    navbarMenuDismiss.forEach((el) => {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        document
          .querySelectorAll(".navbar-active")
          .forEach((el) => el.classList.remove("navbar-active"));
      });
    });

    const navbarSubmenuToggle = document.querySelectorAll(
      '[data-toggle~="navbar-submenu"]'
    );
    navbarSubmenuToggle.forEach((el) => {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        if (window.innerWidth > 767) return;
        document
          .querySelector(this.dataset.target)
          .classList.add("navbar-active");
      });
    });
  }, []);
  const europeCountries = countries.slice(0, 12);
  const asiaCountries = countries.slice(12, 24);
  const vizaCountries = countries.slice(24, 36);

  return (
    <div className="Header">
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <Link to={"/"} className="nav-brand">
              Vego-travel
            </Link>
            <div className="nav-menu-wrapper">
              <div className="navbar-menu-header">
                <p className="navbar-menu-title">Menu</p>
                <Link
                  to={"/"}
                  data-dismiss="navbar-menu"
                  className="navbar-menu-close"
                >
                  &times;
                </Link>
              </div>
              <ul className="nav-menu">
                <li>
                  <Link
                    to={"/"}
                    data-toggle="navbar-submenu"
                    data-target="#tour"
                  >
                    Tour <i className="ri-arrow-down-s-line"></i>
                  </Link>
                  <div className="navbar-submenu-wrapper">
                    <div className="navbar-submenu-menu-wrapper" id="tour">
                      <div className="navbar-submenu-header">
                        <Link
                          to={"/"}
                          data-dismiss="navbar-submenu"
                          className="navbar-submenu-back"
                        >
                          Back
                        </Link>
                        <Link
                          to={"/"}
                          data-dismiss="navbar-menu"
                          className="navbar-menu-close"
                        >
                          &times;
                        </Link>
                      </div>
                      <ul className="navbar-submenu-menu">
                        <li>
                          <Link
                            to={"/"}
                            className="active"
                            data-toggle="navbar-submenu-content navbar-submenu"
                            data-target="#tour-india"
                          >
                            Europe <i className="ri-arrow-right-s-line"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"/"}
                            data-toggle="navbar-submenu-content navbar-submenu"
                            data-target="#tour-sri"
                          >
                            Asia <i className="ri-arrow-right-s-line"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"/"}
                            data-toggle="navbar-submenu-content navbar-submenu"
                            data-target="#tour-japan"
                          >
                            Viza <i className="ri-arrow-right-s-line"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="navbar-submenu-content-wrapper active"
                      id="tour-india"
                    >
                      <div className="navbar-submenu-header">
                        <Link
                          to={"/"}
                          data-dismiss="navbar-submenu"
                          className="navbar-submenu-back"
                        >
                          Back
                        </Link>
                        <Link
                          to={"/"}
                          data-dismiss="navbar-menu"
                          className="navbar-menu-close"
                        >
                          &times;
                        </Link>
                      </div>
                      <div className="navbar-submenu-content-title">Europe</div>
                      <ul className="navbar-submenu-content">
                        {europeCountries.map((country) => (
                          <li key={country.id}>
                            <Link to={`/country/${country.id}/country-about`}>
                              {country.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div
                      className="navbar-submenu-content-wrapper"
                      id="tour-sri"
                    >
                      <div className="navbar-submenu-header">
                        <Link
                          to={"/"}
                          data-dismiss="navbar-submenu"
                          className="navbar-submenu-back"
                        >
                          Back
                        </Link>
                        <Link
                          to={"/"}
                          data-dismiss="navbar-menu"
                          className="navbar-menu-close"
                        >
                          &times;
                        </Link>
                      </div>
                      <div className="navbar-submenu-content-title">Asia</div>
                      <ul className="navbar-submenu-content">
                        {asiaCountries.map((country) => (
                          <li key={country.id}>
                            <Link to={`/country/${country.id}/country-about`}>
                              {country.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div
                      className="navbar-submenu-content-wrapper"
                      id="tour-japan"
                    >
                      <div className="navbar-submenu-header">
                        <Link
                          to={"/"}
                          data-dismiss="navbar-submenu"
                          className="navbar-submenu-back"
                        >
                          Back
                        </Link>
                        <Link
                          to={"/"}
                          data-dismiss="navbar-menu"
                          className="navbar-menu-close"
                        >
                          &times;
                        </Link>
                      </div>
                      <div className="navbar-submenu-content-title">Viza</div>
                      <ul className="navbar-submenu-content">
                        {vizaCountries.map((country) => (
                          <li key={country.id}>
                            <Link to={`/country/${country.id}/country-about`}>
                              {country.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to={"/packages"}>Packages</Link>
                </li>
                <li>
                  <Link to={"/Contact"}>Contact Us</Link>
                </li>
              </ul>
            </div>
            <Link to={"/"} className="navbar-toggle">
              <i className="ri-menu-line"></i>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
