import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  transition: all ease-in-out 0.5s;
  background: ${({ navbg }) => (navbg ? "black" : "transparent")};
  opacity: 0.9;
  height: 80px;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  max-width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    background: transparent;
  }
  .logo {
    display: flex;
    align-items: center;
    padding: 15px 0;
    z-index: 1000;
  }
`;