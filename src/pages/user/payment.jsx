import { Link } from "react-router-dom";
import "../style/payment.css";
import payme from "../../assets/icons/payme-logo.svg";

function Payment() {
    const storedData = localStorage.getItem("formInputs");
    const parsedData = storedData ? JSON.parse(storedData) : {};
    const currentDate = new Date();

    return (
        <div className="payment">
            <div className="container">
                <div className="all_pay">
                    <div className="buttoms-back">
                        <Link to={"/"}><button>Orqaga qaytish</button></Link>
                    </div>
                    <div className="pay-data">
                        <p><b>Sharnoma sanasi: {currentDate.toLocaleDateString()}</b></p>
                        <p className="pay-p"><b>{parsedData.selectedCountry}</b>sayohat uchun sharnoma</p>
                    </div><hr />
                    <div className="payment-information">
                        <div className="company-pay-information pay-m">
                            <p><b>Ijrochi: </b>"VEGO-TRAVEL" MCHJ</p>
                            <p><b>Account raqami: </b>20208840705687571001</p>
                            <p><b>Bank: </b>"TRASTBANK" XAB "DARXON" branch</p>
                            <p><b>Bank koddi: </b>00954</p>
                            <p><b>Manzil: </b>Chirchiq city, 10-44-21 uy</p>
                            <p><b>Telefon raqam: </b>+998 71 201 08 85</p>
                            <p><b>Elekron pochta: </b>vegotravel001@gmail.com</p><hr className="hr-pay" />
                        </div>
                        <div className="user-pay-information pay-m">
                            <p><b>Ism:</b> {parsedData.firstName}</p>
                            <p><b>Familiya:</b> {parsedData.lastName}</p>
                            <p><b>Otasini ismi:</b> {parsedData.Patronymic}</p>
                            <p><b>Elekron pochta:</b> {parsedData.email}</p>
                            <p><b>Telefon raqam:</b> {parsedData.phoneNumber}</p>
                            <p><b>Sayohat:</b> {parsedData.selectedCountry}</p>
                            <p><b>Ketish sanasi:</b> {parsedData.departureDate}</p>
                            <p><b>Qaytish sanasi:</b> {parsedData.returnDate}</p>
                            <p><b>Manzil:</b> {parsedData.Address}</p>
                        </div>
                    </div>
                    <div className="price-payment-check">
                        <h5>Buyurtma qilingan xizmatlar ro'yxati</h5>
                        <table>
                            <thead>
                                <tr>
                                    <th>Turistik xizmatlar</th>
                                    <th>Ketish sanasi</th>
                                    <th>Qaytish sanasi</th>
                                    <th>Tur narxi</th>
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
                                    <td>Umumiy narx</td>
                                    <td></td>
                                    <td></td>
                                    <td>${parsedData.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="payment-pay">
                        <h5>To'lov qilish uchun</h5>
                        <div className="radio-div">
                            <img src={payme} alt="Payme" />
                        </div>
                    </div>
                    <div className="pay-bottom-buttom-div">
                        <Link to={"https://payme.uz"}>
                            <button className="pay-bottom-buttom">To'lov</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
