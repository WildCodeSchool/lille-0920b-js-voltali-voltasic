import React from "react";
//import Pdf from "../Documents/Conditions générales d'utilisation.pdf";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Box = styled.div`
  @media screen and (min-width: 450px) {
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    border-top: 3px solid yellow;
  }

  @media screen and (max-width: 450px) {
    height: 20vh;
    width: 100%;
    display: flex;
    border-top: 3px solid yellow;
  }
`;

const DeskBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;

const Lien = styled(Link)`
  @media screen and (min-width: 450px) {
    font-size: 3vh;
    text-decoration: none;
    color: yellow;
  }
`;

const MobilBox = styled.div`
  @media screen and (max-width: 450px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  @media screen and (min-width: 450px) {
    display: none;
  }
`;

const LienMob = styled(Link)`
  @media screen and (min-width: 450px) {
    display: none;
  }
  @media screen and (max-width: 450px) {
    font-size: 5vh;
    color: yellow;
  }
`;

const Footer = () => {
  return (
    <Box>
      <DeskBox>
        <Lien to="/cgu">CGU</Lien>

        <Lien href="Contact">Contact</Lien>

        <Lien href="Settings">Settings</Lien>
      </DeskBox>
      <MobilBox>
        <LienMob to="/">
          <i className="fas fa-home" />
        </LienMob>
        <LienMob>
          <i className="far fa-address-book" />
        </LienMob>
        <LienMob to="settings">
          <i className="fas fa-cog" />
        </LienMob>
      </MobilBox>
    </Box>
  );
};

export default Footer;
