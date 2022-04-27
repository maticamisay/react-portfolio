import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import ExperienceArticle from "./ExperienceArticle";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <ExperienceArticle name="HTML" experience="2+ years" />
            <ExperienceArticle name="CSS" experience="2+ years" />
            <ExperienceArticle name="Javascript" experience="2+ years" />
            <ExperienceArticle name="Bootstrap" experience="Experienced" />
            <ExperienceArticle name="Tailwind" experience="Experienced" />
            <ExperienceArticle name="React Js" experience="Experienced" />
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <ExperienceArticle name="Node Js" experience="2+ years" />
            <ExperienceArticle name="Express Js" experience="2+ years" />
            <ExperienceArticle name="MySQL" experience="2+ years" />
            <ExperienceArticle name="MongoDB" experience="Experienced" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
