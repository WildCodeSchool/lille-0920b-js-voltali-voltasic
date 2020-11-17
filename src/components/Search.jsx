import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { getYoutube } from "../api/youtubeApiCall";

const SearchMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  width: 40%;
  @media (max-width: 1000px) {
    width: 50%;
  }
  @media (max-width: 500px) {
    width: 90%;
    justify-content: flex-end;
    padding-right: 0%;
  }
`;

const SearchBar = styled.input`
  padding: 1% 2%;
  width: 90%;
  height: 30%;
  border-radius: 15px;
  border: #ffe600 3px solid;
  color: #fff;
  font-size: 20px;
  @media (max-width: 500px) {
    border: #ffe600 2px solid;
  }
`;

const Button = styled.button`
  display: none;
`;

const Form = styled.form`
  width: 100%;
`;

const Search = () => {
  const [value, setValue] = useState("");

  const handleChangeValue = event => {
    setValue(event.target.value);
  };

  return (
    <SearchMain>
      <Form onChange={getYoutube}>
        <SearchBar value={value} onChange={handleChangeValue} />
        <Link
          to={{
            pathname: "/List",
            state: { query: value },
          }}
        >
          <Button></Button>
        </Link>
      </Form>
    </SearchMain>
  );
};

export default Search;
