import React from "react";
import "./experience.css";
import ExperienceArticle from "./ExperienceArticle";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const [t, i18n] = useTranslation();

  return (
    <section id="experience">
      <h5>{t("experience.skills")}</h5>
      <h2>{t("experience.myExp")}</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>{t("experience.frontend")}</h3>
          <div className="experience__content">
            <ExperienceArticle name="HTML" experience={t("experience.2y")} />
            <ExperienceArticle name="CSS" experience={t("experience.2y")} />
            <ExperienceArticle name="Javascript" experience={t("experience.2y")} />
            <ExperienceArticle name="Bootstrap" experience={t("experience.1y")} />
            <ExperienceArticle name="Tailwind" experience={t("experience.1y")} />
            <ExperienceArticle name="React Js" experience={t("experience.1y")} />
          </div>
        </div>
        <div className="experience__backend">
          <h3>{t("experience.backend")}</h3>
          <div className="experience__content">
            <ExperienceArticle name="Node Js" experience={t("experience.1y")} />
            <ExperienceArticle name="Express Js" experience={t("experience.1y")} />
            <ExperienceArticle name="MySQL" experience={t("experience.1y")} />
            <ExperienceArticle name="MongoDB" experience={t("experience.1y")} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
