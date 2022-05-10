import React from "react";
import "./services.css";
import ServiceCard from "./ServiceCard";
import { useTranslation } from "react-i18next";


const Services = () => {
  const [t, i18n] = useTranslation();

  return (
    <section id="services">
      <h5>{t("services.what")}</h5>
      <h2>{t("services.Services")}</h2>
      <div className="container services__container">
        <ServiceCard
          title={t("services.ux")}
          service1="Lorem ipsum dolor sit amet, consectetur adipisicing."
          service2="Lorem ipsum dolor sit amet, consectetur adipisicing."
          service3="Lorem ipsum dolor sit amet, consectetur adipisicing."
          service4="Lorem ipsum dolor sit amet, consectetur adipisicing."
        />
        <ServiceCard
          title={t("services.web")}
          service1="Lorem ipsum dolor sit amet, consectetur adipisicing."
          service2="Lorem ipsum dolor sit amet, consectetur adipisicing."
          service3="Lorem ipsum dolor sit amet, consectetur adipisicing."
          service4="Lorem ipsum dolor sit amet, consectetur adipisicing."
        />
        <ServiceCard
          title={t("services.content")}
          service1="Lorem ipsum dolor sit amet, consectetur adipisicing."
          service2="Lorem ipsum dolor sit amet, consectetur adipisicing."
          service3="Lorem ipsum dolor sit amet, consectetur adipisicing."
          service4="Lorem ipsum dolor sit amet, consectetur adipisicing."
        />
      </div>
    </section>
  );
};

export default Services;
