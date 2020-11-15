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
  color: yellow;
  font-size: 12pt;
  text-shadow: black 0.1em 0.1em 0.2em;
  text-align: center;
  position: absolute;
  background-color: rgba(255, 255, 255, 0);
  visibility: hidden;
  top: 45%;
`;

export const Img = styled.img`
  width: 150px;
  clip-path: ellipse(50% 50%);
`;

export const Image = styled.img`
  transition: transform 0.2s;
  :hover {
    transform: scale(1.1);
  }
`;

export const DivImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  :hover {
    ${SongTitles} {
      visibility: visible;
      opacity: 1;
    }
    ${Image} {
      transform: scale(1.1);
    }
  }
`;

export const RouterLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
