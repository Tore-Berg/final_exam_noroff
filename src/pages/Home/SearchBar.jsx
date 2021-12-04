import React, { useState } from "react";
import { FaSearch, FaWindowClose } from "react-icons/fa";
import {
  Wrapper,
  SearchWrapper,
  SearchIcon,
  SearchResult,
  Input,
} from "./SearchBar.styles";
import { Link } from "react-router-dom";

const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <Wrapper>
      <SearchWrapper>
        <Input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <SearchIcon>
          {filteredData.length === 0 ? (
            <FaSearch />
          ) : (
            <FaWindowClose onClick={clearInput} />
          )}
        </SearchIcon>
      </SearchWrapper>
      {filteredData.length !== 0 && (
        <SearchResult>
          {filteredData.slice(0, 20).map((value) => {
            return (
              <Link
                key={value.id}
                className="resultItem"
                to={`details/${value.id}`} // Link to Details page
              >
                <p>{value.title} </p>
              </Link>
            );
          })}
        </SearchResult>
      )}
    </Wrapper>
  );
};

export default SearchBar;
