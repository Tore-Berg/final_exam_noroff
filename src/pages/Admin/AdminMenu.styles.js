import styled from "styled-components";
import { Link } from "react-router-dom";

const AdminNavigation = styled.nav`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  height: 100%;
  margin: 100px auto;
`;

const StyledLink = styled(Link)`
  margin: auto;
  transition: all ease-in-out .5s;
  &:hover {
    transform: scale(1.1);
    color: gold;
  }
`;

export { AdminNavigation, StyledLink }