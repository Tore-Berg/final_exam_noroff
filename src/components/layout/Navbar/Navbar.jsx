import React, { useState } from "react";
import Hamburger from "./Hamburger";
import { Nav } from "./Navbar.styled";
import logo from "../../../assets/logo_top.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbg, setNavbg] = useState(false);
  const handleChangeBg = () => {
    if (window.scrollY >= 20) {
      setNavbg(true);
    } else {
      setNavbg(false);
    }
  };
  window.addEventListener("scroll", handleChangeBg);
  return (
    <Nav navbg={navbg}>
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <Hamburger />
    </Nav>
  );
};

export default Navbar;
