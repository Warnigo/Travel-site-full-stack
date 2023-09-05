import '../style/contact.css'
import React, { useEffect, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t, i18n } = useTranslation(); // or const [t, i18n] = useTranslation();

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
            <h4>{t("contact.manzil")}</h4>
            <p>{t("contact.manzil-name")}</p>

            <h4>{t("contact.tel-name")}</h4>
            <p>+998(33) 711 08 85</p>

            <h4>{t("contact.teskor")}</h4>
            <Link to={"mailto:vegotravel001@gmail.com"}><p className='p'>{t("contact.email")}</p></Link>
            <Link to={"https://t.me/vego_travel"}><p className='p'>{t("contact.Telegram")}</p></Link>
            <Link to={"https://www.facebook.com/profile.php?id=61550935043546&mibextid=9R9pXO"}><p className='p'>Facebook</p></Link>
            <Link to={"https://www.instagram.com/vego.travel"}><p className='p'>Instagram</p></Link>

          </div>
        </div>
        <div>
          <h3>{t("homeP.contact-tele")}</h3>
          <div className="input-contact">
            <input type="text" placeholder={t("homeP.contact-ism")} onChange={e => setFirstName(e.target.value)} />
            <input type="text" placeholder={t("homeP.contact-fal")} onChange={e => setLastName(e.target.value)} />
            <input type="text" placeholder={t("contact.ota")} onChange={e => setPatronymic(e.target.value)} />
            <input
              type="text"
              placeholder={t("homeP.contact-tel")}
              value={phoneNumber}
              onChange={(e) => {
                const inputText = e.target.value;
                const sanitizedText = inputText.replace(/[^\d+ ]/g, "");
                setPhoneNumber(sanitizedText);
              }}
            />
            <input type="email" placeholder={t("contact.email")} onChange={e => setEmail(e.target.value)} />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="5"
              placeholder={t("homeP.contact-com")}
              onChange={e => setComment(e.target.value)}
            ></textarea>
            <button type="submit" className="contact-butom" onClick={sendToTelegram}>{t("homeP.contact-buttom")}</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Contact;
