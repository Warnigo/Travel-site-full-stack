import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { request } from "../../server/server";
import "../style/offer.css";

function Offer() {
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
    if (storedData) {
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
    }
  }, []);

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
    const totalPrice = travelPrice * personCount

    // e.g: 100.00
    setPrice(totalPrice.toFixed(2))
    setPersonCount(personCount)
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
          <h1 className="offer-h1">Select your travel country and travel</h1>
          <p className="center-p">Please enter the correct information</p>
        </center>
        <div className="offer-form">
          <div className="offer-select">
            <select
              name="country"
              id="country"
              onChange={handleCountryChange}
              value={selectedCountry}
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country.id} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            <hr />
          </div>
          <p>
            Departure from{" "}
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
            Till{" "}
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
            Person{" "}
            <input
              type="number"
              min={"1"}
              placeholder="Ages 6 and up!"
              onChange={handlePersonChange}
            />
          </p>
          <hr />
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Patronymic"
            value={Patronymic}
            onChange={(e) => setPatronymic(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your phone +998..."
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
            placeholder="Address"
            value={Address}
            onChange={handleAddressChange}
          />
          <div className="offer-tour-price">
            {isFormFilled && selectedCountry && (
              <h5>
                Price for {selectedCountry}: ${price}
              </h5>
            )}
          </div>

          <div className="offer-buttom">
            {isFormFilled ? (
              <Link to={"/connect"}>
                <button className="offer-button">Buying now</button>
              </Link>
            ) : (
              <button className="offer-button" disabled>
                Fill in the form first
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
