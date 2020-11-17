import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.div`
  padding: 1%;
`;

export const Title = styled.h2`
  font-size: 25pt;
  color: white;
`;

export const SongTitles = styled.p`
  color: #b4b4b4;
  font-size: 12pt;
  text-shadow: black 0.1em 0.1em 0.2em;
  text-align: center;
  visibility: hidden;
`;

export const Img = styled.img`
  width: 200px;
  clip-path: ellipse(50% 50%);
`;

export const Image = styled.img``;

//tesssssssssst

export const Filter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  visibility: hidden;
`;
export const I = styled.i`
  position: absolute;
  background-color: rgba(0, 0, 0, 0);
  text-align: center;
  color: white;
  text-shadow: black 0.1em 0.1em 0.6em;
  font-size: 25pt;
  top: 40%;
  visibility: hidden;
`;
export const Ok = styled.div`
  :hover {
    ${Filter}, ${I}, ${SongTitles} {
      visibility: visible;
      opacity: 1;
    }
  }
`;
export const DivImg = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    ${Filter}, ${I}, ${SongTitles} {
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
