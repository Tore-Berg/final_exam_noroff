import styled from "styled-components";

const ResultsCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  width: 1100px;
  max-width: 90%;
  margin: 50px auto;
  padding: 20px 0;
  border-bottom: 1px solid lightgray;
`;

const ImageSection = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  border-radius: 10px;
  transition: all ease-in-out 0.3s;
  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }
`;

const TextSection = styled.div`
  display: block;
  & span {
    font-size: 12px;
    color: gray;
  }
`;

export { ResultsCard, ImageSection, TextSection };
