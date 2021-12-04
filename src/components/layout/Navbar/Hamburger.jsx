import React, { useState, useRef } from "react";
import { StyledBurger } from "./Hamburger.styles";
import Menu from "./Menu";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <StyledBurger
        className="scrolledburger"
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <Menu open={open} />
    </div>
  );
};

export default Hamburger;
