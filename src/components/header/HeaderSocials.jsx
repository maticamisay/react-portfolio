import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="linkedin.com">
        <BsLinkedin />
      </a>
      <a href="github.com">
          <BsGithub />
      </a>
      <a href="instagram.com">
          <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
