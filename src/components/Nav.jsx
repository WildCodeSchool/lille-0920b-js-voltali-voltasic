import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Search from "./Search";

const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid yellow;
  color: #fff;
  margin: 0 2%;
  padding: 2%;
  @media (max-width: 450px) {
    border-bottom: 1px solid yellow;
  }
`;

const Logo = styled.img`
  width: 130px;
  height: auto;
  @media (max-width: 450px) {
    max-width: 50px;
  }
`;

const Nav = ({ value, change, youtube }) => {
  return (
    <NavBar>
      <Link to="/">
        <Logo src="./logo.svg" />
      </Link>
      <Search value={value} change={change} youtube={youtube} />
    </NavBar>
  );
};
export default Nav;
