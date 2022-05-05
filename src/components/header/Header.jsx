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
        <div className="dropdown">
          <IoLanguageSharp className="dropdownbtn" />
          <div className="dropdown-content">
            <button href="" onClick={() => i18n.changeLanguage("es")}>
              Esp
            </button>
            <button href="" onClick={() => i18n.changeLanguage("en")}>
              Eng
            </button>
          </div>
          {/* <li>
            <a href="#" onClick={() => i18n.changeLanguage("es")}>
              Es
              {/* <button onClick={() => i18n.changeLanguage("es")}>Es</button>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => i18n.changeLanguage("en")}>
              En
              {/* <button onClick={() => i18n.changeLanguage("en")}>En</button> 
            </a>
          </li> 
          */}
        </div>
        <div className="header__text">
          <h1>{t("about.idioma")}</h1>

          <h5>Hello I'm</h5>
          <h1>Matias</h1>
          <h5 className="text-light">Fullstack Developer</h5>
        </div>
        <CTA />
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
