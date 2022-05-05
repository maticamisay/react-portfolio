import React from 'react'
import CV from '../../assets/CV.pdf'
import { useTranslation } from "react-i18next";

const CTA = () => {
  const [t, i18n] = useTranslation();


  return (
    <div className='cta'>
        <a href={CV} download className='btn'>{t("header.boton_cv")}</a>
        <a href='#contact' className='btn btn-primary'>{t("header.boton_contacto")}</a>
    </div>
  )
}

export default CTA