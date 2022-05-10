import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0q5ywo3",
        "template_6tb639z",
        form.current,
        "1GW_IWNDz4Zo5nIjZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const [t, i18n] = useTranslation();

  return (
    <section id="contact">
      <h5>{t("contact.title")}</h5>
      <h2>{t("contact.contact")}</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>maticamisay99@hotmail.com</h5>
            <a href="mailto:maticamisay99@hotmail.com">{t("contact.send")}</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>maticamisay</h5>
            <a href="https://m.me/maticamisay" target="_blank">
              {t("contact.send")}
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+54 9 264 444 4444</h5>
            <a href="https://wa.me/5492645898880" target="_blank">
              {t("contact.send")}
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder={t("contact.name")}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("contact.email")}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder={t("contact.msg")}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {t("contact.sendMsg")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
