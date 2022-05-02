import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container container__contact">
        <div className="contact__options"></div>
        {/* END OF CONTACT OPTIONS */}
        <article className="contact__option">
          <MdOutlineMail />
          <h4>Email</h4>
          <h5>maticamisay99@hotmail.com</h5>
          <a href="mailto:maticamisay99@hotmail.com">Send a message</a>
        </article>
        <article className="contact__option">
          <RiMessengerLine />
          <h4>Messenger</h4>
          <h5>maticamisay</h5>
          <a href="https://m.me/maticamisay" target="_blank">
            Send a message
          </a>
        </article>
        <article className="contact__option">
          <FaWhatsapp />
          <h4>Whatsapp</h4>
          <h5>+54 9 264 444 4444</h5>
          <a href="https://wa.me/5492645898880" target="_blank">
            Send a message
          </a>
        </article>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
