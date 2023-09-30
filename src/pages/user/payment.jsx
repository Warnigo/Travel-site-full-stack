import { Link } from "react-router-dom";
import "../style/payment.css";
import payme from "../../assets/icons/payme-logo.svg";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useState } from "react";

const ORIGIN = "https://api.vegotravel.uz";

function Payment() {
  const { t, i18n } = useTranslation(); // or const [t, i18n] = useTranslation();
  const [isLoading, setLoading] = useState(false);
  const storedData = localStorage.getItem("formInputs");
  const parsedData = storedData ? JSON.parse(storedData) : {};
  const currentDate = new Date();

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    if (isLoading) return -1;
    setLoading(true);

    const response = await axios.post("register", parsedData, {
      baseURL: ORIGIN,
    });

    if (response.status !== 200) {
      console.error("Error", response.statusText);
      return -1;
    }

    const replaceOrigin = `${ORIGIN}/payment?user_id=${response.data.uuid}&amount=${parsedData.price}`;
    window.location.replace(replaceOrigin);
  };

  return (
    <div className="payment">
      <div className="container">
        <div className="all_pay">
          <div className="buttoms-back">
            <div>
              <Link to={"/"}>
                <button>{t("payment.Orqaga")}</button>
              </Link>
            </div>
            <div>
              <Link className="pay-link-lng">
                <button
                  className="lng-buttoms"
                  onClick={() => handleClick("uz")}
                >
                  Uz
                </button>
              </Link>
              <Link className="pay-link-lng">
                <button
                  className="lng-buttoms"
                  onClick={() => handleClick("ru")}
                >
                  Ru
                </button>
              </Link>
            </div>
          </div>
          <div className="pay-data">
            <p>
              <b>
                {t("payment.Sharnomasanasi")}:{" "}
                {currentDate.toLocaleDateString()}
              </b>
            </p>
            <p className="pay-p">
              <b>{parsedData.selectedCountry}</b> {t("payment.pay-description")}
            </p>
          </div>
          <hr />
          <div className="payment-information">
            <div className="company-pay-information pay-m">
              <p>
                <b>{t("payment.Ijrochi")}: </b>"VEGO-TRAVEL" MCHJ
              </p>
              <p>
                <b>{t("payment.accaund")}: </b>20208840705687571001
              </p>
              <p>
                <b>{t("payment.bank")}: </b>"TRASTBANK" XAB "DARXON" branch
              </p>
              <p>
                <b>{t("payment.bank-nem")}: </b>00954
              </p>
              <p>
                <b>{t("offer.Manzil")}: </b>
                {t("payment.adress")}
              </p>
              <p>
                <b>{t("payment.telephone")}: </b>+998 71 201 08 85
              </p>
              <p>
                <b>{t("homeP.contact-email")}: </b>vegotravel001@gmail.com
              </p>
              <hr className="hr-pay" />
            </div>
            <div className="user-pay-information pay-m">
              <p>
                <b>{t("homeP.contact-ism")}:</b> {parsedData.firstName}
              </p>
              <p>
                <b>{t("homeP.contact-fal")}:</b> {parsedData.lastName}
              </p>
              <p>
                <b>{t("contact.ota")}:</b> {parsedData.Patronymic}
              </p>
              <p>
                <b>{t("contact.email")}:</b> {parsedData.email}
              </p>
              <p>
                <b>{t("payment.telephone")}:</b> {parsedData.phoneNumber}
              </p>
              <p>
                <b>{t("connect.Sayohat")}:</b> {parsedData.selectedCountry}
              </p>
              <p>
                <b>{t("connect.Ketish sanasi")}:</b> {parsedData.departureDate}
              </p>
              <p>
                <b>{t("connect.Qaytish sanasi")}:</b> {parsedData.returnDate}
              </p>
              <p>
                <b>{t("contact.manzil")}:</b> {parsedData.Address}
              </p>
            </div>
          </div>
          <div className="price-payment-check">
            <h5>{t("payment.buyurtmalar")}</h5>
            <table>
              <thead>
                <tr>
                  <th>{t("payment.Turistik xizmatlar")}</th>
                  <th>{t("connect.Ketish sanasi")}</th>
                  <th>{t("connect.Qaytish sanasi")}</th>
                  <th>{t("homeP.price-description")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {parsedData.selectedCountry} x{parsedData.personCount}
                  </td>
                  <td>{parsedData.departureDate}</td>
                  <td>{parsedData.returnDate}</td>
                  <td>${parsedData.price}</td>
                </tr>
                <tr>
                  <td>{t("payment.hamm-narxi")}</td>
                  <td></td>
                  <td></td>
                  <td>${parsedData.price}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="payment-pay">
            <h5>{t("payment.pay")}</h5>
            <div className="radio-div">
              <img src={payme} alt="Payme" />
            </div>
          </div>
          <div className="pay-bottom-buttom-div">
            <button
              onClick={handlePayment}
              className={`pay-bottom-buttom ${!!isLoading && "loading"}`}
            >
              {isLoading ? <span className="spin" /> : t("offer.To'lov")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
