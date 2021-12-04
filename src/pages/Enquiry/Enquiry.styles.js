import styled from "styled-components";
import { FaWindowClose } from "react-icons/fa";

const Modal = styled.div`
  z-index: 1000;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: white;
`;
const ModalBg = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 10px auto;
  border-radius: 10px;
`;
const CloseIcon = styled(FaWindowClose)`
  position: absolute;
  color: #fff;
  top: 20px;
  right: 20px;
  cursor: pointer;
  &:hover {
    color: 0.3;
  }
`;
const Overlay = styled.div`
  background: #000;
  opacity: 0.95;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
`;

export { Modal, ModalBg, CloseIcon, Overlay };
