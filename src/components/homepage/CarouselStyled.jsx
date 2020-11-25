import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.div`
  padding: 1%;
  background-color: black;
`;

export const Title = styled.h2`
  font-size: 25pt;
  color: white;
  background-color: black;
`;

export const SongTitles = styled.p`
  text-transform: lowercase;
  color: grey;
  font-size: 12pt;
  text-shadow: black 0.1em 0.1em 0.2em;
  text-align: center;
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0);
  top: 45%;
`;

export const Img = styled.img`
  width: 150px;
  clip-path: ellipse(50% 50%);
`;

export const Image = styled.img`
  width: 100%;
  height: 180px;
`;

export const Filter = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  text-align: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  visibility: hidden;
`;

export const I = styled.i`
  position: absolute;
  background-color: rgba(0, 0, 0, 0);
  color: rgba(255, 255, 255, 0.8);
  text-shadow: black 0.1em 0.1em 0.6em;
  font-size: 25pt;
  top: 40%;
  visibility: visible;
`;

export const Container = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  :hover {
    ${Filter} {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const DivImg = styled.div`
  display: flex;
  flex-direction: column;
  :hover {
    ${SongTitles} {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const RouterLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
