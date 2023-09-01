import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { request } from "../../server/server";
import { Spin } from "antd";
import "../style/country.css";

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
          <h2 className="country-name">{countryData.name_uz}</h2>
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
              <h3>Tur haqida</h3>
              <p className="country-description">{countryData.description_uz}</p>
              <hr />
              <h3>Tafsilotlar</h3>
              <p className="country-description1">{countryData.description1_uz}</p>
              <hr />
              <div className="country-contact">
                <p>Batafsil ma'lumot uchun biz bilan bog'laning!</p>
              </div>
            </div>
          </div>
          <div className="country-price-div">
            <hr />
            <p>
              Tur narxi: <span>${countryData.price}</span>
            </p>
            <hr />
          </div>
          <div className="country-buttom">
            <Link to={"/offer"} className="link">
              <button type="submit">Tur  sotib olish</button>
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
