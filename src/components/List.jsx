import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { getYoutube } from "../api/youtubeApiCall";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 3%;
  flex-wrap: wrap;
`;

const MusicItem = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: yellow;
  background: none;
  transition: 0.5s ease;
  margin-bottom: 3%;
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
    transition: 0.5s ease;
    transform: scale(1.1);
  }
`;

const IMG = styled.img`
  width: inherit;
`;

const Paragraph = styled.p`
  width: 50%;
`;

const H1 = styled.h1`
  color: white;
  width: 50%;
  text-align: start;
`;

const List = () => {
  const [items, setItems] = useState([]);

  const location = useLocation();

  const handleSearch = async (inputValue) => {
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
      <H1>Results</H1>
      {items.map((item) => (
        <MusicItem key={item.id.videoId}>
          <Link
            to={{
              pathname: `/music/${item.id.videoId}`,
              state: { title: item.snippet.title },
            }}
          >
            <IMG
              src={item.snippet.thumbnails.medium.url}
              alt={item.snippet.title}
            />
          </Link>
          <Paragraph>{item.snippet.title}</Paragraph>
        </MusicItem>
      ))}
    </MainDiv>
  );
};
export default List;
