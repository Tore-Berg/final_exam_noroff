import styled from "styled-components";

const Wrapper = styled.div`
  width: 400px;
  max-width: 90%;
`;
const SearchWrapper = styled.div`
  margin-top: 105px;
  display: flex;
  width: 100%;
`;
const Input = styled.input`
  font-family: inherit;
  background-color: white;
  border: 0;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  font-size: 18px;
  padding: 15px;
  height: 60px;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.div`
  height: 60px;
  width: 50px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  background-color: white;
  color: gray;
  display: grid;
  place-items: center;
  cursor: pointer;
  & svg {
    font-size: 25px;
    margin-right: 10px;
  }
`;

const SearchResult = styled.div`
  margin-top: 5px;
  width: 100%;
  height: 200px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  & .resultItem {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    color: black;
    & p {
      margin-left: 10px;
    }
    & a {
      text-decoration: none;
      &:hover {
        background-color: lightgray;
      }
    }
  }
`;

export { Wrapper, SearchWrapper, SearchIcon, SearchResult, Input };
