import React, { useEffect, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { request } from "../../server/server";

import home from "../../assets/images/mohammed-bg.jpg";
import home1 from "../../assets/images/way-bg.jpg";
import home2 from "../../assets/images/river-bg.webp";
import bg1 from "../../assets/images/china.jpg";
import bg2 from "../../assets/images/dubai.jpg";
import bg3 from "../../assets/images/germany.jpg";
import bg4 from "../../assets/images/paris.jpg";
import bg5 from "../../assets/images/qiz-qalasi.jpg";
import bg6 from "../../assets/images/other/china-about.jpg";
import bg7 from "../../assets/images/other/italy-about.jpg";
import dp from "../../assets/images/other/austria.jpg";
import dp1 from "../../assets/images/other/burch-alarab.jpg";
import dp2 from "../../assets/images/other/china-b.jpg";
import dp3 from "../../assets/images/other/geogria.jpg";
import dp4 from "../../assets/images/other/Italy.jpg";
import dp5 from "../../assets/images/other/london.jpg";
import dp6 from "../../assets/images/istanbull.jpg";

const HomeP = () => {
  const [searchText, setSearchText] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    // Header carousel functionality
    const headerImage = document.querySelector(".header-image");
    const headerImageIndicator = document.querySelector(
      ".header-image-indicator"
    );
    let activeImage = 0;
    Array.from(headerImageIndicator.children).forEach((el, idx) => {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        Array.from(headerImage.children).forEach((item) =>
          item.classList.remove("active")
        );
        headerImage.children[idx].classList.add("active");
        Array.from(headerImageIndicator.children).forEach((item) =>
          item.classList.remove("active")
        );
        this.classList.add("active");
        activeImage = idx;
      });
    });

    function carousel() {
      Array.from(headerImage.children).forEach((item) =>
        item.classList.remove("active")
      );
      headerImage.children[activeImage].classList.add("active");

      Array.from(headerImageIndicator.children).forEach((item) =>
        item.classList.remove("active")
      );
      headerImageIndicator.children[activeImage].classList.add("active");

      if (activeImage < headerImage.children.length - 1) {
        activeImage++;
      } else {
        activeImage = 0;
      }

      setTimeout(function () {
        requestAnimationFrame(carousel);
      }, 5000);
    }
    carousel();

    const prevSlideButtons = document.querySelectorAll('[data-slide="prev"]');
    prevSlideButtons.forEach((el) => {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.dataset.target);
        target.scrollLeft += target.offsetWidth;
      });
    });

    const nextSlideButtons = document.querySelectorAll('[data-slide="next"]');
    nextSlideButtons.forEach((el) => {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.dataset.target);
        target.scrollLeft -= target.offsetWidth;
      });
    });
    request
      .get("country")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Ma'lumotlarni olishda xatolik yuz berdi:", error);
      });
  }, []);

  useEffect(() => {
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [searchText, countries]);

  // telegram client for contact button start
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const sendToTelegram = () => {
    const message = `
        New Contact Information:
        First Name: ${firstName}
        Last Name: ${lastName}
        Phone Number: ${phoneNumber}
        Email: ${email}
        Comment: ${comment}
      `;

    const chatId = "2093505929";
    const botToken = "6411651569:AAEjeDhJkjK0IeDNYFVWnBqpUyA9BF4FbYs";

    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
      message
    )}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          alert("Message sent! We will contact you soon.");
        } else {
          alert("There was an error sending the message. Please try again.");
        }
      })
      .catch((error) => {
        alert("There was an error sending the message. Please try again.");
      });
  };
  // telegram client for contact button end

  return (
    <Fragment>
      <section id="section-1">
        <header>
          <div className="container">
            <div className="header-image">
              <img className="active" src={home1} alt="carousel" />
              <img src={home2} alt="carousel" />
              <img src={home} alt="carousel" />
            </div>
            <div className="header-wrapper">
              <h2 className="header-title">
                Discover the world one adventure at a time
              </h2>
              <p className="header-description">
                Discover the world with tour. Explore new destinations and book
                your next tour today.
              </p>
              <form className="header-form">
                <input
                  type="text"
                  placeholder="Search for your adventure..."
                  value={searchText}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    setSearchText(newValue);
                    localStorage.setItem("searchText", newValue);
                  }}
                />
                <div className="dropdown">
                  <Link to={"/packages"}>
                    <button type="submit" className="btn">
                      <i className="ri-search-line"></i> Search
                    </button>
                  </Link>
                </div>
              </form>
              <div
                className={`dropdown-content ${
                  searchText.length > 0 ? "active" : ""
                }`}
              >
                {searchText.length > 0 &&
                  filteredCountries
                    .filter((country) =>
                      country.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
                    )
                    .slice(0, 5)
                    .map((country) => (
                      <Link
                        className="dropdown-item"
                        to={`/country/${country.id}/country-about`}
                      >
                        {country.name}
                      </Link>
                    ))}
              </div>
            </div>
            <div className="header-image-indicator">
              <Link to={""} className="active"></Link>
              <Link to={""}></Link>
              <Link to={""}></Link>
            </div>
          </div>
        </header>
      </section>
      <section id="section-2">
        <div className="container">
          <div className="city-images-txt">
            <h1>Places not to be missed</h1>
            <p>
              You have the opportunity to see the places in these pictures with
              your own eyes. Whether you want to travel to a developed city or
              to a country with wonderful nature, decide for yourself and
              contact us!
            </p>
          </div>
          <div className="city-images-img">
            <div className="city-img-all">
              <div className="city-img-left">
                <img src={bg5} alt="img" />
                <img className="city-img-left-right" src={bg1} alt="img" />
              </div>
              <div className="city-img-center">
                <img src={bg2} alt="img" />
              </div>
              <div className="city-img-right">
                <img src={bg3} alt="img" />
                <img className="city-img-left-right" src={bg4} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="destination">
        <div className="container">
          <div className="title-ds">
            <h2 className="destination-title">Top Destinations</h2>
            <Link to={"/packages"} style={{ color: "black" }}>
              <h3 className="destination-more">
                More <i className="ri-arrow-down-s-line"></i>
              </h3>
            </Link>
          </div>

          <div className="destination-wrapper">
            <a
              href="#"
              className="slider-arrow prev"
              data-slide="next"
              data-target="#destination-list"
            >
              <i className="ri-arrow-left-s-line"></i>
            </a>
            <a
              href="#"
              className="slider-arrow next"
              data-slide="prev"
              data-target="#destination-list"
            >
              <i className="ri-arrow-right-s-line"></i>
            </a>
            <div className="destination-list" id="destination-list">
              <Link to={"/country/1/country-about"}>
                <div className="destination-list-card">
                  <div className="destination-list-top">
                    <img src={dp5} />
                    <span className="destinations-list-top-tag">Popular</span>
                  </div>
                  <div className="destination-list-content">
                    <div className="destination-list-content-location">
                      <i className="ri-global-line"> </i>
                      London, England
                    </div>
                    <p className="destination-list-content-title">
                      7 day trip in the capital of England, London. A journey
                      full of wonderful adventures awaits you.
                    </p>
                    <div class="destination-list-content-price">
                      from <span>$990</span>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={"/country/14/country-about"}>
                <div className="destination-list-card">
                  <div className="destination-list-top">
                    <img src={dp2} />
                    <span className="destinations-list-top-tag">Popular</span>
                  </div>
                  <div className="destination-list-content">
                    <div className="destination-list-content-location">
                      <i className="ri-global-line"> </i>
                      Pekin, China
                    </div>
                    <p className="destination-list-content-title">
                      8 day trip in the capital of China, Pekin. A journey full
                      of wonderful adventures awaits you.
                    </p>
                    <div class="destination-list-content-price">
                      from <span>$549</span>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={"/country/20/country-about"}>
                <div className="destination-list-card">
                  <div className="destination-list-top">
                    <img src={dp6} />
                    <span className="destinations-list-top-tag">Popular</span>
                  </div>
                  <div className="destination-list-content">
                    <div className="destination-list-content-location">
                      <i className="ri-global-line"> </i>
                      Istanbull, Turkey
                    </div>
                    <p className="destination-list-content-title">
                      8 day trip in the capital of Istanbull, Turkey. A journey
                      full of wonderful adventures awaits you.
                    </p>
                    <div class="destination-list-content-price">
                      from <span>$639</span>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={"/country/13/country-about"}>
                <div className="destination-list-card">
                  <div className="destination-list-top">
                    <img src={dp1} />
                    <span className="destinations-list-top-tag">Popular</span>
                  </div>
                  <div className="destination-list-content">
                    <div className="destination-list-content-location">
                      <i className="ri-global-line"> </i>
                      Abu Dhabi, Dubai
                    </div>
                    <p className="destination-list-content-title">
                      6 day trip in the capital of Dubai. A journey full of
                      wonderful adventures awaits you.
                    </p>
                    <div class="destination-list-content-price">
                      from <span>$470</span>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={"/country/2/country-about"}>
                <div className="destination-list-card">
                  <div className="destination-list-top">
                    <img src={dp4} />
                    <span className="destinations-list-top-tag">Popular</span>
                  </div>
                  <div className="destination-list-content">
                    <div className="destination-list-content-location">
                      <i className="ri-global-line"> </i>
                      Rim, Italy
                    </div>
                    <p className="destination-list-content-title">
                      9 day trip in the capital of Rim, Italy. A journey full of
                      wonderful adventures awaits you.
                    </p>
                    <div class="destination-list-content-price">
                      from <span>$680</span>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={"/country/21/country-about"}>
                <div className="destination-list-card">
                  <div className="destination-list-top">
                    <img src={dp3} />
                    <span className="destinations-list-top-tag">Popular</span>
                  </div>
                  <div className="destination-list-content">
                    <div className="destination-list-content-location">
                      <i className="ri-global-line"> </i>
                      Tbilisi, Georgia
                    </div>
                    <p className="destination-list-content-title">
                      8 day trip in the capital of Tbilisi, Georgia. A journey
                      full of wonderful adventures awaits you.
                    </p>
                    <div class="destination-list-content-price">
                      from <span>$670</span>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={"/country/9/country-about"}>
                <div className="destination-list-card">
                  <div className="destination-list-top">
                    <img src={dp} />
                    <span className="destinations-list-top-tag">Popular</span>
                  </div>
                  <div className="destination-list-content">
                    <div className="destination-list-content-location">
                      <i className="ri-global-line"> </i>
                      Vena, Austria
                    </div>
                    <p className="destination-list-content-title">
                      7 day trip in the capital of Vena, Austria. A journey full
                      of wonderful adventures awaits you.
                    </p>
                    <div class="destination-list-content-price">
                      from <span>$690</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <hr />
        </div>
      </section>
      <section className="section-about">
        <div className="container">
          <h1 className="about-h1">About company</h1>
          <div className="about-all-div">
            <div className="about-right">
              <img
                src={bg6}
                alt="images"
                className="about-img about-img-left"
              />
              <p className="about-p-right">
                Through this site, you can travel to the times you want and
                like. You can make all the necessary arrangements for your trip
                through us. Even in the matter of visa
              </p>
              <hr className="about-hr" />
            </div>
            <div className="about-left">
              <p className="about-p-left">
                Also, through VEGO-TRAVEL, you can use our services of airline
                tickets, hotels, visas, ochrat issues and questionnaires. We are
                happy to show you respect
              </p>
              <img
                src={bg7}
                alt="image"
                className="about-img about-img-right"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="end-section-contact">
        <div className="container">
          <h3>Fill in your information and we will contact you.</h3>
          <div className="input-contact">
            <input
              type="text"
              placeholder="First name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              placeholder="+998..."
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="5"
              placeholder="Comment (Optional)"
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="contact-butom"
              onClick={sendToTelegram}
            >
              Send
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HomeP;
