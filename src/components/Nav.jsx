import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Search from "./Search";

const NavBar = styled.div`
  position: fixed;
  top: 0;
  background-color: #1e1e20;
  display: flex;
  width: 100%;
  height: 10vh;
  justify-content: space-around;
  color: #fff;
  z-index: 1;
  @media (max-width: 500px) {
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
