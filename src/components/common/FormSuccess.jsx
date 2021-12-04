import React from "react";
import styled from "styled-components";

const StyledMessage = styled.div`
  display: flex;
  height: 90vh;
  background-color: #ebebeb;
  justify-content: center;
  align-items: center;
  .form-success {
    color: green;
    text-align: center;
  }
`;
const FormSuccess = ({ message }) => {
  return (
    <StyledMessage>
      <h3 className="form-success">{message}</h3>
    </StyledMessage>
  );
};

export default FormSuccess;
