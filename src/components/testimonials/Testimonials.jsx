import React from "react";
import "./testimonials.css";
import Avatar1 from "../../assets/avatar.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Testimonials = () => {
  const [t, i18n] = useTranslation();

  return (
    <section id="testimonials">
      <h5>{t("testimonials.review")}</h5>
      <h2>{t("testimonials.testimonials")}</h2>
      <Swiper
        spaceBetween={40}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="container testimonials__container"
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Avatar1} alt="avatar png" />
          </div>
          <h5 className="client__name">Nombre</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
            corporis nostrum sapiente deleniti laborum ratione inventore totam
            quos cum eaque?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Avatar1} alt="avatar png" />
          </div>
          <h5 className="client__name">Nombre</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
            corporis nostrum sapiente deleniti laborum ratione inventore totam
            quos cum eaque?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Avatar1} alt="avatar png" />
          </div>
          <h5 className="client__name">Nombre</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
            corporis nostrum sapiente deleniti laborum ratione inventore totam
            quos cum eaque?
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
