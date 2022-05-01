import React from "react";
import "./testimonials.css";
import Avatar1 from "../../assets/avatar.png";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={Avatar1} alt="avatar png" />
          </div>
          <h5 className="client__name">Nombre</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
            corporis nostrum sapiente deleniti laborum ratione inventore totam
            quos cum eaque?
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={Avatar1} alt="avatar png" />
          </div>
          <h5 className="client__name">Nombre</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
            corporis nostrum sapiente deleniti laborum ratione inventore totam
            quos cum eaque?
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={Avatar1} alt="avatar png" />
          </div>
          <h5 className="client__name">Nombre</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
            corporis nostrum sapiente deleniti laborum ratione inventore totam
            quos cum eaque?
          </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
