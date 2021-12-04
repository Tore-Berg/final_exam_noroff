import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const StyledListItem = styled.li`
  margin: 50px 0;
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
  padding: 20px 0;
`;
export { StyledList, StyledListItem };
