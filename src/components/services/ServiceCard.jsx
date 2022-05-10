import React from "react";
import { BsCheck } from "react-icons/bs";
import { IconContext } from "react-icons";

const ServiceCard = ({ title, service1, service2, service3, service4 }) => {
  return (
    <article className="service">
      <div className="service__head">
        <h3>{title}</h3>
      </div>
      <ul className="service__list">
        <li>
          <IconContext.Provider value={{ size: "20px" }}>
            <BsCheck className="service__list-icon" />
          </IconContext.Provider>
          <p>{service1}</p>
        </li>
        <li>
          <IconContext.Provider value={{ size: "20px" }}>
            <BsCheck className="service__list-icon" />
          </IconContext.Provider>
          <p>{service2}</p>
        </li>
        <li>
          <IconContext.Provider value={{ size: "20px" }}>
            <BsCheck className="service__list-icon" />
          </IconContext.Provider>
          <p>{service3}</p>
        </li>
        <li>
          <IconContext.Provider value={{ size: "20px" }}>
            <BsCheck className="service__list-icon" />
          </IconContext.Provider>
          <p>{service4}</p>
        </li>
      </ul>
    </article>
  );
};

export default ServiceCard;
