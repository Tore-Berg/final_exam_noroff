import React from "react";
import { StyledSubHeading } from "./Heading.styles";

const SubHeading = ({ title }) => {
  return (
    <StyledSubHeading>
      <h2>{title}</h2>
    </StyledSubHeading>
  );
};

export default SubHeading;
