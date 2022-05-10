import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { useTranslation } from "react-i18next";

const About = () => {
  const [t, i18n] = useTranslation();

  return (
    <section id="about">
      <h5>{t("about.sobre_mi")}</h5>
      <h2>{t("about.YO")}</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>{t("about.exp")}</h5>
              <small>{t("about.exp_tiempo")}</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>{t("about.clientes")}</h5>
              <small>{t("about.clientes_total")}</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>{t("about.proyectos")}</h5>
              <small>{t("about.proyectos_total")}</small>
            </article>
          </div>
          <p>
          {t("about.texto_sobre_mi")}
          </p>
          <a href="#contact" className="btn btn-primary">
            {t("about.about_boton")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
