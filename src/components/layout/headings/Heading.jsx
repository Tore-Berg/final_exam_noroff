import React from "react";
import { StyledHeading } from "./Heading.styles";

const Heading = ({ title }) => {
  return (
    <StyledHeading>
      <h1>{title}</h1>
    </StyledHeading>
  );
};

export default Heading;
