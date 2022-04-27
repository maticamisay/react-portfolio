import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const ExperienceArticle = ({ name, experience }) => {
  return (
    <article className="experience__details">
      <BsPatchCheckFill className="experience__details-icon"/>
      <div>
        <h4>{name}</h4>
        <small className="text-light">{experience}</small>
      </div>
    </article>
  );
};

export default ExperienceArticle;
