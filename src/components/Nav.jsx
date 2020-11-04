import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
const Nav = ({ value, change, youtube }) => {
  return (
    <div className="search-bar">
      <p>Logo</p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <Search value={value} change={change} youtube={youtube} />
    </div>
  );
};
export default Nav;
