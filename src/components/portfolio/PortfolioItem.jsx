import React from "react";

const PortfolioItem = ({ title, imgsrc, github, demo }) => {
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={imgsrc} alt="" />
      </div>
      <h3>{title}</h3>
      <div className="portfolio__item-cta">
        <a href={github} className="btn btn-primary" target="_blank">
          Github
        </a>
        {demo && (
          <a href={demo} className="btn btn-primary" target="_blank">
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
};

export default PortfolioItem;
