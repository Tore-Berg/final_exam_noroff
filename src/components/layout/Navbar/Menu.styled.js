import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  padding: 0px 10px;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
  z-index: 1000;
  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column;
    justify-content: center;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    margin-top: 0;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

export { StyledLink, Ul };
