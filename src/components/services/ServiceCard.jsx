import React from "react";
import { BsCheck } from "react-icons/bs";

const ServiceCard = ({ title, service1, service2, service3, service4 }) => {
  return (
    <article className="service">
      <div className="service__head">
        <h3>{title}</h3>
      </div>
      <ul className="service__list">
        <li>
          <BsCheck className="service__list-icon" />
          <p>{service1}</p>
        </li>
        <li>
          <BsCheck className="service__list-icon" />
          <p>{service2}</p>
        </li>
        <li>
          <BsCheck className="service__list-icon" />
          <p>{service3}</p>
        </li>
        <li>
          <BsCheck className="service__list-icon" />
          <p>{service4}</p>
        </li>
        <li>
          <BsCheck className="service__list-icon" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </li>
      </ul>
    </article>
  );
};

export default ServiceCard;
