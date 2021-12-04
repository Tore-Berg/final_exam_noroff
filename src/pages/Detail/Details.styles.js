import styled from "styled-components";

const Description = styled.div`
  display: block;
  & span {
    font-size: 12px;
    color: gray;
  }
`;

const DetailsWrapper = styled.div`
  max-width: 90%;
  margin: auto;
`;

export { Description, DetailsWrapper };
