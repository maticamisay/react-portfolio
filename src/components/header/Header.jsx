import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import { useTranslation } from "react-i18next";
import { IoLanguageSharp } from "react-icons/io5";

const Header = () => {
  const [t, i18n] = useTranslation();

  return (
    <header>
      <div className="container header__container">
        <div className="header__text">
          <h5>{t("header.presentacion")}</h5>
          <h1>Matias</h1>
          <h5 className="text-light">{t("header.carrera")}</h5>
        </div>
        <CTA />
        <div className="dropdown">
          LANGUAGE <IoLanguageSharp className="dropdownbtn" />
          <div className="dropdown-content">
            <button href="" onClick={() => i18n.changeLanguage("es")}>
              Esp
            </button>
            <button href="" onClick={() => i18n.changeLanguage("en")}>
              Eng
            </button>
          </div>
        </div>

        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
