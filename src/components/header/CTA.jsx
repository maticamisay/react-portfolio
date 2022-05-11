import React from "react";
// import CV from '../../assets/CV.pdf'
import CV_Eng from "../../assets/CV_English.pdf";
import CV_Esp from "../../assets/CV_Esp.pdf";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const [t, i18n] = useTranslation();
  let CV = t("header.lang");

  return (
    <div className="cta">
      {CV == "LANGUAGE" ? (
        <a href={CV_Esp} download className="btn">
          {t("header.boton_cv")}
        </a>
      ) : (
        <a href={CV_Eng} download className="btn">
          {t("header.boton_cv")}
        </a>
      )}
      {/* <a href={CV} download className="btn">
        {t("header.boton_cv")}
      </a> */}
      <a href="#contact" className="btn btn-primary">
        {t("header.boton_contacto")}
      </a>
    </div>
  );
};

export default CTA;
