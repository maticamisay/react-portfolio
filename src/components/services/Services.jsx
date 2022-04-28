import React from "react";
import "./services.css";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <ServiceCard
          title="UX/UI Designer"
          service1="Lorem ipsum dolor sit amet, consectetur adipisicing."
          service2="Lorem ipsum dolor sit amet, consectetur adipisicing."
          service3="Lorem ipsum dolor sit amet, consectetur adipisicing."
          service4="Lorem ipsum dolor sit amet, consectetur adipisicing."
        />
        <ServiceCard
          title="Web Development"
          service1="Lorem ipsum dolor sit amet, consectetur adipisicing."
          service2="Lorem ipsum dolor sit amet, consectetur adipisicing."
          service3="Lorem ipsum dolor sit amet, consectetur adipisicing."
          service4="Lorem ipsum dolor sit amet, consectetur adipisicing."
        />
        <ServiceCard
          title="Content Creation"
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
