import {FaTrash} from 'react-icons/fa'
import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  transition: all ease-in-out 0.3s;
  text-align: center;
  border: none;
  outline: none;
  margin: ${(props) => (props.secondary ? "0px 60px" : "20px 0px")};
  border-radius: 30px;
  font-family: inherit;
  padding: 10px 14px;
  font-size: 14px;
  background-color: #fff;
  color: #000;
  -webkit-appearance: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  -webkit-box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  &:hover {
    box-shadow: none;
    color: gold;
    border: 1px solid gold;
  }
`;

export const DangerButton = styled(Button)`
  background-color: red;
  color: #fff;
  &:hover {
    background-color: #fff;
    color: red;
    border: 1px solid red;
  }
`;
export const WarningButton = styled(DangerButton)`
  background-color: orange;
`;

export const TrashCan = styled(FaTrash)`
display: inline-block;
cursor: pointer;
transition: all ease-in-out .3s;
  &:hover {
    color: red;
    transform: scale(1.1);
  }
  
`
export const ButtonWrapper = styled.div` 
display: flex;
align-items: center;
width: 30%;
justify-content: space-between;
@media(max-width: 768px) {
  width: 40%;
}
`