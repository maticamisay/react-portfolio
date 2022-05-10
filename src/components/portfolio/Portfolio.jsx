import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio1.jpg";
import IMG4 from "../../assets/portfolio2.jpg";
import IMG5 from "../../assets/portfolio1.jpg";
import IMG6 from "../../assets/portfolio2.jpg";
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
          title={t("portfolio.title1")}
          imgsrc={IMG1}
          github="https://github.com"
          demo="https://github.com"
        />
        <PortfolioItem
          title={t("portfolio.title1")}
          imgsrc={IMG2}
          github="https://github.com"
          demo="https://github.com"
        />
        <PortfolioItem
          title={t("portfolio.title1")}
          imgsrc={IMG3}
          github="https://github.com"
          demo="https://github.com"
        />
        <PortfolioItem
          title={t("portfolio.title1")}
          imgsrc={IMG4}
          github="https://github.com"
          demo="https://github.com"
        />
        <PortfolioItem
          title={t("portfolio.title1")}
          imgsrc={IMG5}
          github="https://github.com"
          demo="https://github.com"
        />
        <PortfolioItem
          title={t("portfolio.title1")}
          imgsrc={IMG6}
          github="https://github.com"
          demo="https://github.com"
        />
      </div>
    </section>
  );
};

export default Portfolio;
