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
  border: 1px solid red;
  width: 90%;
  visibility: hidden;
`;

export const Img = styled.img`
  width: 150px;
  clip-path: ellipse(50% 50%);
`;

export const Image = styled.img``;

//tesssssssssst
export const Filter = styled.div`
  position: absolute;
  width: 100vw;
  height: 70vh;
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const I = styled.i`
  position: absolute;
  background-color: rgba(0, 0, 0, 0);
  text-align: center;
  color: white;
  font-size: 25pt;
  visibility: hidden;
`;

export const DivImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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
