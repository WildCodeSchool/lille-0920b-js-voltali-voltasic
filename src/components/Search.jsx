import React, { useState } from "react";
import { Link } from "react-router-dom";
const Search = () => {
  const [value, setValue] = useState("");

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="search-main">
      <input value={value} onChange={handleChangeValue} />
      <Link
        to={{
          pathname: "/List",
          state: { query: value },
        }}
      >
        <button>ALLEZ</button>
      </Link>
    </div>
  );
};

export default Search;
