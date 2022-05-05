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
      <h1>{t("about.idioma")}</h1>
      <br />
      <br />
      <button onClick={()=> i18n.changeLanguage("es")}>Es</button>
      <button onClick={()=> i18n.changeLanguage("en")}>En</button>

      <h5>Get To Know</h5>
      <h2>About ME</h2>
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
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ Satisfied Clients</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            officia explicabo nesciunt inventore tempora placeat, adipisci
            labore animi facere, similique dicta quo temporibus! Veritatis
            dignissimos at aliquid, odit beatae ullam!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
