import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import styled from "styled-components";
import { useHistory } from "react-router";

const StyledArrowLeft = styled(FaAngleLeft)`
  margin-top: 50px;
  transition: all ease-in-out 0.3s;
  &:hover {
    cursor: pointer;
    color: gold;
    transform: scale(1.2);
  }
`;
export default function GoBack() {
  const handleClick = () => {
    history.goBack();
  };
  const history = useHistory();
  return <StyledArrowLeft size={50} onClick={handleClick} />;
}
