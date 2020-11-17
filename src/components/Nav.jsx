import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Search from "./Search";

const NavBar = styled.div`
  /*background-image: url("./audience-868074_960_720.png");
  background-repeat: no-repeat;
  background-size: cover;*/

  display: flex;
  width: 100%;
  height: 30vh;
  margin-bottom: 25vh;
  justify-content: space-around;
  border-bottom: 2px solid yellow;
  color: #fff;
  @media (max-width: 500px) {
    border-bottom: 1px solid yellow;
    background-image: none;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  @media (max-width: 500px) {
    max-width: 100%;
  }
`;

const Lien = styled(Link)`
  height: 100%;
  width: 20%;
`;

const Nav = ({ value, change, youtube }) => {
  return (
    <NavBar>
      <Lien to="/">
        <Logo src="./logo.svg" />
      </Lien>
      <Search value={value} change={change} youtube={youtube} />
    </NavBar>
  );
};
export default Nav;
