import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { request } from "../../server/server";
import { Spin } from "antd";
import "../style/country.css";

import dp from "../../assets/images/other/austria.jpg";
import dp1 from "../../assets/images/other/burch-alarab.jpg";
import dp2 from "../../assets/images/other/china-b.jpg";
import dp3 from "../../assets/images/other/geogria.jpg";
import dp4 from "../../assets/images/other/Italy.jpg";
import dp5 from "../../assets/images/other/london.jpg";
import dp6 from "../../assets/images/istanbull.jpg";

const Country = () => {
  const { id } = useParams();
  const [countryData, setCountryData] = useState(null);
  const [showImgSrc, setShowImgSrc] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    request
      .get(`country/${id}/country-about`)
      .then((response) => {
        setCountryData(response.data[0]);
        if (response.data[0].img) {
          setShowImgSrc(response.data[0].img);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, [id]);

  const handleIndicatorClick = (e) => {
    if (e.target.tagName === "IMG") {
      setShowImgSrc(e.target.src);
    }
  };

  return (
    <div className="container">
      {isLoading && (
        <div className="loading">
          <Spin size="large" />
        </div>
      )}
      {countryData ? (
        <div>
          <h2 className="country-name">{countryData.name}</h2>
          <div id="show">
            <img src={showImgSrc} alt="" />
          </div>
          <div className="country-display">
            <div className="country-img-div">
              {[
                countryData.img,
                countryData.img1,
                countryData.img2,
                countryData.img3,
                countryData.img4,
                countryData.img5,
              ].map((imgSrc, index) => (
                <img
                  className={`country-img img${index}`}
                  src={imgSrc}
                  alt=""
                  key={index}
                  onClick={handleIndicatorClick}
                />
              ))}
            </div>
            <div className="country-description-div">
              <h3>About tour</h3>
              <p className="country-description">{countryData.description}</p>
              <hr />
              <h3>Description</h3>
              <p className="country-description1">{countryData.description1}</p>
              <hr />
              <div className="country-contact">
                <p>Contact us for more details!</p>
              </div>
            </div>
          </div>
          <div className="country-price-div">
            <hr />
            <p>
              Tour price: <span>${countryData.price}</span>
            </p>
            <hr />
          </div>
          <div className="country-buttom">
            <Link to={"/offer"} className="link">
              <button type="submit">Buy tour</button>
            </Link>
          </div>
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default Country;
