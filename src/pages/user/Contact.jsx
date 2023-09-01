import '../style/contact.css'
import React, { useEffect, Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {

  // telegram client for contact button start
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const sendToTelegram = () => {
    const message = `
      New Contact page Information:
      Surname: ${firstName}
      Given name: ${lastName}
      Patronymic: ${patronymic}
      Phone Number: ${phoneNumber}
      Email: ${email}
      Comment: ${comment}
    `;

    const chatId = '2093505929';
    const botToken = '6411651569:AAEjeDhJkjK0IeDNYFVWnBqpUyA9BF4FbYs';

    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          alert('Message sent! We will contact you soon.');
        } else {
          alert('There was an error sending the message. Please try again.');
        }
      })
      .catch(error => {
        alert('There was an error sending the message. Please try again.');
      });
  };
  // telegram client for contact button end
  return (
    <div className="contact">
      <div className="container">
        <div className='details'>
          <div className="contact-details">
            <h4>Bizning manzil:</h4>
            <p>Chirchiq, 10-44-21 uy</p>

            <h4>Bizni telefon raqamlarimiz:</h4>
            <p>+998(33) 711 08 85</p>

            <h4>Tezkor aloqa:</h4>
            <Link to={"mailto:vegotravel001@gmail.com"}><p className='p'>Electron pochta</p></Link>
            <Link to={"https://t.me/vego_travel"}><p className='p'>Telegram</p></Link>
            <Link to={"https://www.facebook.com/profile.php?id=61550935043546&mibextid=9R9pXO"}><p className='p'>Facebook</p></Link>
            <Link to={"https://www.instagram.com/vego.travel"}><p className='p'>Instagram</p></Link>

          </div>
        </div>
        <div>
          <h3>Ma'lumotlaringizni to'ldiring va biz siz bilan bog'lanamiz.</h3>
          <div className="input-contact">
            <input type="text" placeholder="isim" onChange={e => setFirstName(e.target.value)} />
            <input type="text" placeholder="Familiya" onChange={e => setLastName(e.target.value)} />
            <input type="text" placeholder="O'tangizni ismi" onChange={e => setPatronymic(e.target.value)} />
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
            <input type="email" placeholder="Electron pochta" onChange={e => setEmail(e.target.value)} />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="5"
              placeholder="Izoh (Ixtiyoriy)"
              onChange={e => setComment(e.target.value)}
            ></textarea>
            <button type="submit" className="contact-butom" onClick={sendToTelegram}>Yuborish</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Contact;
