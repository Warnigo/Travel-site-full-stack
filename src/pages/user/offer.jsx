import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { request } from "../../server/server";
import "../style/offer.css";

function Offer() {
  const [countries, setCountries] = useState([]);
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [tourPrice, setTourPrice] = useState(0);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comment, setComment] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryPrices, setCountryPrices] = useState({});

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
    checkFormCompletion();
  }, [countries, firstName, lastName, email, phoneNumber, selectedCountry]);

  useEffect(() => {
    if (selectedCountry && countryPrices[selectedCountry]) {
      setTourPrice(countryPrices[selectedCountry]);
    }
  }, [selectedCountry, countryPrices]);

  const checkFormCompletion = () => {
    if (
      countries.length > 0 &&
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      phoneNumber !== "" &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
      /^[+]?\d+(\s|\d)*$/.test(phoneNumber) &&
      selectedCountry !== ""
    ) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  };

  const handlePersonChange = (event) => {
    const personCount = event.target.value;
    const basePrice = personCount * 2;
    const calculatedPrice = basePrice;
    setTourPrice(calculatedPrice);
  };

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
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
            Departure from <input type="date" onChange={checkFormCompletion} />
          </p>
          <p>
            Till <input type="date" onChange={checkFormCompletion} />
          </p>
          <hr />
          <p>
            Person{" "}
            <input type="number" min={"0"} onChange={handlePersonChange} />
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
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Telefon raqami +998..."
            value={phoneNumber}
            onChange={(e) => {
              const inputText = e.target.value;
              const sanitizedText = inputText.replace(/[^\d+ ]/g, "");
              setPhoneNumber(sanitizedText);
            }}
          />

          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="5"
            placeholder="Comment (Optional)"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <div className="offer-tour-price">
            {isFormFilled && selectedCountry && (
              <h5>
                Price for {selectedCountry}: ${countryPrices[selectedCountry]}
              </h5>
            )}
          </div>
          <div className="offer-buttom">
            {isFormFilled ? (
              <Link to={"/pay"}>
                <button className="offer-buttom">Buying now</button>
              </Link>
            ) : (
              <button className="offer-buttom" onClick={checkFormCompletion}>
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
