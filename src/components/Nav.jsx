import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Search from "./Search";

const NavBar = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
  justify-content: center;
  color: #000;
  @media (max-width: 500px) {
    border-bottom: 1px solid yellow;
  }
`;

const Logo = styled.img`
  width: 15%;
  @media (max-width: 500px) {
    max-width: 100%;
  }
`;

const Lien = styled(Link)`
  height: 100%;
  width: 20%;
`;

const Container = styled.div`
  border: 1px solid red;
`;

const Nav = ({ value, change, youtube }) => {
  return (
    <NavBar>
      <Container>
        <Lien to="/">
          <Logo src="./logo.svg" />
        </Lien>
        <Search value={value} change={change} youtube={youtube} />
      </Container>
    </NavBar>
  );
};
export default Nav;
