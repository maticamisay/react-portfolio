import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/guitar_la.jpg";
import IMG2 from "../../assets/search_api.jpg";
import IMG3 from "../../assets/clima_api.jpg";
import IMG4 from "../../assets/todo_list.jpg";
import IMG5 from "../../assets/CMR_JavascriptVainilla.jpg";
import IMG6 from "../../assets/adm_pacientes.jpg";
import PortfolioItem from "./PortfolioItem";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const [t, i18n] = useTranslation();

  return (
    <section id="portfolio">
      <h5>{t("portfolio.work")}</h5>
      <h2>{t("portfolio.portfolio")}</h2>
      <div className="container portfolio__container">
        <PortfolioItem
          title="Ecommerce GuitarLA"
          imgsrc={IMG1}
          github="https://github.com/maticamisay/guitarla-next"
          demo="https://guitarla-next-bay.vercel.app/"
        />
        <PortfolioItem
          title="News Search Api"
          imgsrc={IMG2}
          github="https://github.com"
          demo={false}
        />
        <PortfolioItem
          title="Clima Api"
          imgsrc={IMG3}
          github="https://github.com/maticamisay/Clima-App"
          demo="https://clima-app-silk.vercel.app/"
        />
        <PortfolioItem
          title="To Do Tasks - React"
          imgsrc={IMG4}
          github="https://github.com/maticamisay/To-do-list"
          demo="https://maticamisay.github.io/To-do-list/"
        />
        <PortfolioItem
          title="CMR con IndexedDB"
          imgsrc={IMG5}
          github="https://github.com/maticamisay/CRM-con-IndexedDB"
          demo="https://maticamisay.github.io/CRM-con-IndexedDB/index.html"
        />
        <PortfolioItem
          title="Administrador de Citas"
          imgsrc={IMG6}
          github="https://github.com/maticamisay/proyecto-citas"
          demo="https://maticamisay.github.io/proyecto-citas/"
        />
      </div>
    </section>
  );
};

export default Portfolio;
