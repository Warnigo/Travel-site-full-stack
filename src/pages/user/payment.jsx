import "../style/payment.css"

function Payment() {
    const storedData = localStorage.getItem("formInputs");
    const parsedData = storedData ? JSON.parse(storedData) : {};

    return (
        <div className="paymant">
            <div className="container">
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
    )
}

export default Payment;