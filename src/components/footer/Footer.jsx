import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  const [t, i18n] = useTranslation();

  return (
    <footer>
      <a href="#" className="footer__logo">
        Matias Camisay
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">{t("footer.home")}</a>
        </li>
        <li>
          <a href="#about">{t("footer.about")}</a>
        </li>
        <li>
          <a href="#experience">{t("footer.experience")}</a>
        </li>
        <li>
          <a href="#services">{t("footer.services")}</a>
        </li>
        <li>
          <a href="#portfolio">{t("footer.portfolio")}</a>
        </li>
        <li>
          <a href="#testimonials">{t("footer.testimonials")}</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/matias-camisay/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/maticamisay">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/m.camisay/">
          <BsInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Matias Camisay. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
