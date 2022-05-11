import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/matias-camisay/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/maticamisay">
          <BsGithub />
      </a>
      <a href="https://www.instagram.com/m.camisay/">
          <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
