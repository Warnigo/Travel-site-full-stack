import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import '../style/connect.css'

const Connect = () => {
  const { t, i18n } = useTranslation(); // or const [t, i18n] = useTranslation();
  const storedData = localStorage.getItem("formInputs");
  const parsedData = storedData ? JSON.parse(storedData) : {};

  const [isChecked, setIsChecked] = useState(false);

  const sentTelegramBot = () => {
    if(!isChecked) {
      console.log("Please confirm that your information is correct.");
      return;
    }
    if (isChecked) {
      const message = `
      New Connect Information Payment:
        First Name: ${parsedData.firstName}
        Last Name: ${parsedData.lastName}
        Patronymic: ${parsedData.Patronymic}
        Email: ${parsedData.email}
        Phone Number: ${parsedData.phoneNumber}
        Selected Country: ${parsedData.selectedCountry}
        Departure Date: ${parsedData.departureDate}
        Return Date: ${parsedData.returnDate}
        Address: ${parsedData.Address}
    `;

      const chatId = "2093505929";
      const botToken = "6411651569:AAEjeDhJkjK0IeDNYFVWnBqpUyA9BF4FbYs";
      const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
        message
      )}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log("Telegram response:", data);
        })
        .catch(error => {
          console.error("Error sending message to Telegram:", error);
        });
    } else {
      alert("Please confirm the correct information.");
    }


  };

  return (
    <div className="all">
      <div className="container">
        <div className="connect-title">
          <h2>{t("connect.connect-title")}</h2>
        </div>
        <div className="connect-infomation">
          <p><b>{t("homeP.contact-ism")}:</b> {parsedData.firstName}</p>
          <p><b>{t("homeP.contact-fal")}:</b> {parsedData.lastName}</p>
          <p><b>{t("contact.ota")}:</b> {parsedData.Patronymic}</p>
          <p><b>{t("contact.email")}:</b> {parsedData.email}</p>
          <p><b>{t("payment.telephone")}:</b> {parsedData.phoneNumber}</p>
          <p><b>{t("connect.Sayohat")}:</b> {parsedData.selectedCountry}</p>
          <p><b>{t("connect.Ketish sanasi")}:</b> {parsedData.departureDate}</p>
          <p><b>{t("connect.Qaytish sanasi")}:</b> {parsedData.returnDate}</p>
          <p><b>{t("contact.manzil")}:</b> {parsedData.Address}</p>
        </div>
        <div className="bottom"><br />
          <p><input className="checkbox" type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} /> <small>{t("connect.checkbox")}</small></p>
          <Link to={isChecked ? "/pay" : "#"}>
            <button type="submit" onClick={sentTelegramBot} className="con-buttom">{t("offer.To'lov")}</button>
          </Link><br /><br />
          <Link to={"/offer"} className="change-buttom">{t("connect.chenges-info")}</Link><br /><br />
        </div>
      </div>
    </div>
  );
};

export default Connect;
