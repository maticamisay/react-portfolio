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
          service1={t("services.ux1")}
          service2={t("services.ux2")}
          service3={t("services.ux3")}
          service4={t("services.ux4")}
        />
        <ServiceCard
          title={t("services.web")}
          service1={t("services.web1")}
          service2={t("services.web2")}
          service3={t("services.web3")}
          service4={t("services.web4")}
        />
        <ServiceCard
          title={t("services.content")}
          service1={t("services.cont1")}
          service2={t("services.cont2")}
          service3={t("services.cont3")}
          service4={t("services.cont4")}
        />
      </div>
    </section>
  );
};

export default Services;
