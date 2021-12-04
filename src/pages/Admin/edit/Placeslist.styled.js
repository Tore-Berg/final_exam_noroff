import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 0;
`;
const StyledListItem = styled.li`
  padding: 20px;
`;
const StyledLink = styled(Link)`
  &:hover {
    border-bottom: 1px solid gold;
    font-weight: 700;
  }
`;
export { StyledList, StyledLink, StyledListItem };
