import styled from "styled-components";

const StyledFormWrapper = styled.div`
  display: flex;
  width: 600px;
  max-width: 90%;
  padding: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: 5px;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  line-height: 30px;
  padding: 10px;
  font-size: 12px;
  & input,
  textarea {
    width: 100%;
    margin: 5px 0;
    padding: 10px 20px;
    border-radius: 20px;
    font-family: inherit;
    cursor: pointer;
    border: none;
    -webkit-appearance: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    -webkit-box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
  & input[type="checkbox"] {
    width: 50px;
    -webkit-appearance: checkbox;
  }
  & input[type="radio"] {
    width: 50px;
    -webkit-appearance: radio;
  }
  & textarea {
    margin: 20px 0;
    height: 100px;
  }
  & button {
    border: none;
    width: 100%;
    padding: 10px 20px;
    font-family: inherit;
    border-radius: 20px;
    cursor: pointer;
  }
`;
const RadioButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  & input {
    box-shadow: none;
  }
`;

export { StyledForm, StyledFormWrapper, RadioButtons };
