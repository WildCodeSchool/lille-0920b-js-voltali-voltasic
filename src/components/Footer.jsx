import React from "react";
import Pdf from "../Documents/Conditions générales d'utilisation.pdf";
import styled from "styled-components";

const Container = styled.div`
  @media screen and (max-width: 450px) {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;
const Box = styled.div`
  @media screen and (min-width: 450px) {
    height: 30vh;
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

const Lien = styled.a`
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

const LienMob = styled.a`
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
        <Lien href={Pdf}>CGU</Lien>

        <Lien href="Contact">Contact</Lien>

        <Lien href="Settings">Settings</Lien>
      </DeskBox>
      <MobilBox>
        <LienMob href="home">
          <i className="fas fa-home" />
        </LienMob>
        <LienMob href={Pdf}>
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
