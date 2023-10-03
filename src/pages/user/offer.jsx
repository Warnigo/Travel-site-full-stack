import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { request } from "../../server/server";
import "../style/offer.css";

function Offer() {
  const { t, i18n } = useTranslation();
  const [countries, setCountries] = useState([]);
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [price, setPrice] = useState(0)
  const [personCount, setPersonCount] = useState(0)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Patronymic, setPatronymic] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Address, setAddress] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryPrices, setCountryPrices] = useState({});
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [dataSaved, setDataSaved] = useState(false);

  useEffect(() => {
    request
      .get("country")
      .then((response) => {
        setCountries(response.data);
        const price = {};
        response.data.forEach((country) => {
          price[country.name] = country.price;
        });
        setCountryPrices(price);
      })
      .catch((error) => {
        console.error("error api:", error);
      });
  }, []);

  useEffect(() => {
    const storedData = localStorage.getItem("formInputs");

    if (storedData && !dataSaved) {
      const parsedData = JSON.parse(storedData);
      setFirstName(parsedData.firstName);
      setLastName(parsedData.lastName);
      setPatronymic(parsedData.Patronymic);
      setEmail(parsedData.email);
      setPhoneNumber(parsedData.phoneNumber);
      setAddress(parsedData.Address);
      setSelectedCountry(parsedData.selectedCountry);
      setDepartureDate(parsedData.departureDate);
      setReturnDate(parsedData.returnDate);

      setDataSaved(true);
    }
  }, [dataSaved]);

  useEffect(() => {
    const formInputs = {
      firstName,
      lastName,
      Patronymic,
      email,
      phoneNumber,
      Address,
      selectedCountry,
      departureDate,
      returnDate,
      personCount,
      price
    };

    localStorage.setItem("formInputs", JSON.stringify(formInputs));
  }, [
    firstName,
    lastName,
    Patronymic,
    email,
    phoneNumber,
    Address,
    selectedCountry,
    departureDate,
    returnDate,
    personCount,
    price
  ]);

  useEffect(() => {
    checkFormCompletion();
  }, [
    countries,
    firstName,
    lastName,
    email,
    phoneNumber,
    Address,
    selectedCountry,
    departureDate,
    returnDate,
  ]);

  const checkFormCompletion = () => {
    if (
      countries.length > 0 &&
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      phoneNumber !== "" &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
      /^[+]?\d+(\s|\d)*$/.test(phoneNumber) &&
      Address !== "" &&
      selectedCountry !== "" &&
      departureDate !== "" &&
      returnDate !== ""
    ) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  };

  const handlePersonChange = (event) => {
    const personCount = parseInt(event.target.value);
    const travelPrice = parseFloat(countryPrices[selectedCountry]);
    const totalPrice = travelPrice * personCount;
    setPrice(totalPrice.toFixed(2));
    setPersonCount(personCount);
  };

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
  };

  const handleAddressChange = (event) => {
    const newAddress = event.target.value;
    setAddress(newAddress);
    checkFormCompletion();
  };

  return (
    <div className="offer">
      <div className="container">
        <center>
          <h1 className="offer-h1">{t("offer.offer-title")}</h1>
          <p className="center-p">{t("offer.offer-description")}</p>
        </center>
        <div className="offer-form">
          <div className="offer-select">
            <select
              name="country"
              id="country"
              onChange={handleCountryChange}
              value={selectedCountry}
            >
              <option value="">{t("offer.select-offer")}</option>
              {countries.map((country) => (
                <option key={country.id} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            <hr />
          </div>
          <p>
            {t("offer.ketish")}{" "}
            <input
              type="date"
              value={departureDate}
              onChange={(e) => {
                setDepartureDate(e.target.value);
                checkFormCompletion();
              }}
            />
          </p>
          <p>
            {t("offer.Qaytish")}{" "}
            <input
              type="date"
              value={returnDate}
              onChange={(e) => {
                setReturnDate(e.target.value);
                checkFormCompletion();
              }}
            />
          </p>
          <hr />
          <p>
            {t("offer.people")}{" "}
            <input
              type="number"
              min={"1"}
              placeholder={t("offer.people-placeholder")}
              onChange={handlePersonChange}
            />
          </p>
          <hr />
          <input
            type="text"
            placeholder={t("homeP.contact-ism")}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder={t("homeP.contact-fal")}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder={t("contact.ota")}
            value={Patronymic}
            onChange={(e) => setPatronymic(e.target.value)}
          />
          <input
            type="email"
            placeholder={t("contact.email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder={t("homeP.contact-tel")}
            value={phoneNumber}
            onChange={(e) => {
              const inputText = e.target.value;
              const sanitizedText = inputText.replace(/[^\d+ ]/g, "");
              setPhoneNumber(sanitizedText);
            }}
          />
          <hr />
          <input
            type="text"
            placeholder={t("offer.Manzil")}
            value={Address}
            onChange={handleAddressChange}
          />
          <div className="offer-tour-price">
            {isFormFilled && selectedCountry && (
              <h5>
                {t("offer.Tur narxi uchun")} {selectedCountry}: ${price}
              </h5>
            )}
          </div>

          <div className="offer-buttom">
            {isFormFilled ? (
              <Link to={"/connect"}>
                <button className="offer-button">{t("offer.To'lov")}</button>
              </Link>
            ) : (
              <button className="offer-button" disabled>
                {t("offer.buttom-av")}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;

