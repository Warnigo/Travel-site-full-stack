import { Link } from "react-router-dom";
import "../style/payment.css";

import click from "../../assets/icons/click.png";
import visa from "../../assets/icons/viza.png";
import payme from "../../assets/icons/payme-logo.svg";

function Payment() {
    const storedData = localStorage.getItem("formInputs");
    const parsedData = storedData ? JSON.parse(storedData) : {};
    const currentDate = new Date();

    const handlePaymentButtonClick = () => {
        const paymentMethod = document.querySelector('input[name="payment"]:checked').id;

        if (paymentMethod === "click") {
            window.location.href = "https://click.uz";
        } else if (paymentMethod === "visa") {
            window.location.href = "https://visa.com";
        } else if (paymentMethod === "payme") {
            window.location.href = "https://payme.uz"; 
        }
    };

    return (
        <div className="payment">
            <div className="container">
                <div className="all_pay">
                    <div className="buttoms-back">
                        <Link to={"/"}><button>Back Home Page</button></Link>
                    </div>
                    <div className="pay-data">
                        <p><b>Contract Date: {currentDate.toLocaleDateString()}</b></p>
                        <p className="pay-p"><b>{parsedData.selectedCountry}</b> payment for the travel contract</p>
                    </div><hr />
                    <div className="payment-information">
                        <div className="company-pay-information pay-m">
                            <p><b>Executor: </b>"VEGO-TRAVEL" MCHJ</p>
                            <p><b>Account number: </b>20208840705687571001</p>
                            <p><b>Bank: </b>"TRASTBANK" XAB "DARXON" branch</p>
                            <p><b>Bank code: </b>00954</p>
                            <p><b>Address: </b>Chirchiq city, 10-44-21 apartment</p>
                            <p><b>Phone Number: </b>+998 71 201 08 85</p>
                            <p><b>Email: </b>vegotravel001@gmail.com</p><hr className="hr-pay" />
                        </div>
                        <div className="user-pay-information pay-m">
                            <p><b>First Name:</b> {parsedData.firstName}</p>
                            <p><b>Last Name:</b> {parsedData.lastName}</p>
                            <p><b>Patronymic:</b> {parsedData.Patronymic}</p>
                            <p><b>Email:</b> {parsedData.email}</p>
                            <p><b>Phone Number:</b> {parsedData.phoneNumber}</p>
                            <p><b>Selected Country:</b> {parsedData.selectedCountry}</p>
                            <p><b>Departure Date:</b> {parsedData.departureDate}</p>
                            <p><b>Return Date:</b> {parsedData.returnDate}</p>
                            <p><b>Address:</b> {parsedData.Address}</p>
                        </div>
                    </div>
                    <div className="price-payment-check">
                        <h5>List of ordered services</h5>
                        <table>
                            <thead>
                                <tr>
                                    <th>Tour services</th>
                                    <th>Departure date</th>
                                    <th>Return date</th>
                                    <th>Tour price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{parsedData.selectedCountry} x{parsedData.personCount}</td>
                                    <td>{parsedData.departureDate}</td>
                                    <td>{parsedData.returnDate}</td>
                                    <td>${parsedData.price}</td>
                                </tr>
                                <tr>
                                    <td>Total price</td>
                                    <td></td>
                                    <td></td>
                                    <td>${parsedData.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="payment-pay">
                        <h5>Choose a payment method:</h5>
                        <div className="radio-div">
                            <label>
                                <input type="radio" id="payme" name="payment" />
                                <img src={payme} alt="Payme" />
                            </label><br />

                            {/* <label>
                                <input type="radio" id="click" name="payment" />
                                <img src={click} alt="Click"  className="click "/>
                            </label><br />

                            <label>
                                <input type="radio" id="visa" name="payment" />
                                <img src={visa} alt="Visa" />
                            </label> */}
                        </div>
                    </div>
                    <div className="pay-bottom-buttom-div">
                        <button onClick={handlePaymentButtonClick} className="pay-bottom-buttom">Pay Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
