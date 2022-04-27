import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const ExperienceArticle = ({name,experience}) => {
  return (
    <article className="experience__details">
      <BsPatchCheckFill />
      <h4>{name}</h4>
      <small className="text-light">{experience}</small>
    </article>
  );
};

export default ExperienceArticle;
