import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { StyledFooter, SocialIcons } from "./Footer.styles";
import logo from "../../../assets/logo_bottom.png";

const Footer = () => {
  return (
    <StyledFooter>
      <img src={logo} alt="logo" className="bottom_logo" />
      <SocialIcons>
        <FaFacebook className="icon" size={40} />
        <FaInstagram className="icon" size={40} />
        <FaTwitter className="icon" size={40} />
      </SocialIcons>
      <div>
        <span
          dangerouslySetInnerHTML={{
            __html: "&copy; Tore Berg 2021. All rights reserved.",
          }}
        />
      </div>
    </StyledFooter>
  );
};

export default Footer;
