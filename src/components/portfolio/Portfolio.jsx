import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio1.jpg";
import IMG4 from "../../assets/portfolio2.jpg";
import IMG5 from "../../assets/portfolio1.jpg";
import IMG6 from "../../assets/portfolio2.jpg";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <PortfolioItem
          title="This is a portfolio title"
          imgsrc={IMG1}
          github="https://github.com"
          demo="https://github.com"
        />
        <PortfolioItem
          title="This is a portfolio title"
          imgsrc={IMG2}
          github="https://github.com"
          demo="https://github.com"
        />
        <PortfolioItem
          title="This is a portfolio title"
          imgsrc={IMG3}
          github="https://github.com"
          demo="https://github.com"
        />
        <PortfolioItem
          title="This is a portfolio title"
          imgsrc={IMG4}
          github="https://github.com"
          demo="https://github.com"
        />
        <PortfolioItem
          title="This is a portfolio title"
          imgsrc={IMG5}
          github="https://github.com"
          demo="https://github.com"
        />
        <PortfolioItem
          title="This is a portfolio title"
          imgsrc={IMG6}
          github="https://github.com"
          demo="https://github.com"
        />
      </div>
    </section>
  );
};

export default Portfolio;
