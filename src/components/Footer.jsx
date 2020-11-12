import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Box = styled.div`
  @media screen and (min-width: 501px) {
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    border-top: 3px solid yellow;
  }

  @media screen and (max-width: 500px) {
    height: 10vh;
    width: 100%;
    display: flex;
    border-top: 3px solid yellow;
  }
`;

const DeskBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Lien = styled(Link)`
  @media screen and (min-width: 501px) {
    font-size: 3vh;
    text-decoration: none;
    color: yellow;
  }
`;

const MobilBox = styled.div`
  @media screen and (max-width: 500px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
  }
  @media screen and (min-width: 501px) {
    display: none;
  }
`;

const LienMob = styled(Link)`
  @media screen and (min-width: 501px) {
    display: none;
  }

  @media screen and (max-width: 500px) {
    font-size: 3vh;
    color: yellow;
  }
`;

const Cgu = styled.a`
  @media screen and (min-width: 500px) {
    color: yellow;
    font-size: 3vh;
    text-decoration: none;
  }
  @media screen and (max-width: 500px) {
    color: yellow;
    font-size: 3vh;
    text-decoration: none;
  }
`;

const Footer = () => {
  return (
    <Box>
      <DeskBox>
        <Cgu href="./cgu.pdf" target="_blank">
          CGU
        </Cgu>

        <Lien to="/">Contact</Lien>

        <Lien to="/">Settings</Lien>
      </DeskBox>
      <MobilBox>
        <LienMob to="/">
          <i className="fas fa-home" />
        </LienMob>
        <Cgu href="./cgu.pdf">
          <i className="far fa-address-book" />
        </Cgu>
        <LienMob to="/">
          <i className="fas fa-cog" />
        </LienMob>
      </MobilBox>
    </Box>
  );
};

export default Footer;
