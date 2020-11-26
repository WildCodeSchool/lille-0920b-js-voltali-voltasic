import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { getYoutube } from "../api/youtubeApiCall";

const MainDiv = styled.div`
  border: 1px solid red;
  background-color: black;
  display: flex;
  flex-direction: column;
  padding: 2%;
  width: 95.8%;
  padding-top: 3%;
  flex-wrap: wrap;
`;

const MusicItem = styled.div`
  background-color: black;
  margin-left: 15%;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: yellow;
  background: none;
  transition: 0.5s ease;
  margin-bottom: 3%;
  width: 70%;
  @media (max-width: 1100px) {
    width: 70%;
  }
  @media (max-width: 800px) {
    width: 90%;
    justify-content: flex-end;
    padding-right: 0%;
  }
  @media (max-width: 650px) {
    width: 90%;
    flex-direction: column;
    padding-right: 0%;
  }
  :hover {
  }
`;

const Filter = styled.div`
  border: 1px solid green;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  visibility: visible;
`;

const IMG = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid red;
  margin-top: 1%;
  width: inherit;
  :hover {
  }
`;

const Links = styled(Link)`
  background-color: black;
`;

const Paragraph = styled.p`
  background-color: black;
  color: white;
  width: 50%;
  margin-left: 20px;
`;

const H1 = styled.h1`
  background-color: black;
  color: white;
  width: 50%;
  text-align: start;
`;

const List = () => {
  const [items, setItems] = useState([]);

  const location = useLocation();

  const handleSearch = async inputValue => {
    const myData = await getYoutube(inputValue);
    setItems(myData.items);
  };

  useEffect(() => {
    if (location.state.query) {
      handleSearch(location.state.query);
    }
  }, [location.state.query]);
  return (
    <MainDiv>
      <H1>Résultats</H1>

      {items.map(item => (
        <MusicItem key={item.id.videoId}>
          <Links
            to={{
              pathname: `/music/${item.id.videoId}`,
              state: { title: item.snippet.title },
            }}
          >
            <IMG
              src={item.snippet.thumbnails.medium.url}
              alt={item.snippet.title}
            />
            <Filter></Filter>
          </Links>
          <Paragraph>{item.snippet.title}</Paragraph>
        </MusicItem>
      ))}
    </MainDiv>
  );
};
export default List;
