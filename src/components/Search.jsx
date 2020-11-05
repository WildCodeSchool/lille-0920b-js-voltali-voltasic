import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SearchMain = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`;

const SearchBar = styled.input`
  margin-left: 0px;
  width: 350px;
  height: 40px;
  border-radius: 15px;
  border: #ffe600 3px solid;
  color: #fff;
  font-size: 20px;
  @media (max-width: 450px) {
    width: 200px;
    height: 20px;
    border: #ffe600 2px solid;
  }
`;

const Button = styled.button`
  color: #fff;
  border: 0;
  cursor: pointer;
`;

const Search = () => {
  const [value, setValue] = useState("");

  const handleChangeValue = event => {
    setValue(event.target.value);
  };

  return (
    <SearchMain>
      <SearchBar value={value} onChange={handleChangeValue} />
      <Link
        to={{
          pathname: "/List",
          state: { query: value },
        }}
      >
        <Button>ALLEZ</Button>
      </Link>
    </SearchMain>
  );
};

export default Search;
