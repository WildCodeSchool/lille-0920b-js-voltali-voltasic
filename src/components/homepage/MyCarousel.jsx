import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";

import { getYoutube } from "../../api/youtubeApiCall";

import styled from "styled-components";

const Main = styled.div`
  padding: 1%;
`;

const Title = styled.h2`
  font-size: 25pt;
  color: white;
`;

const SongTitles = styled.p`
  color: yellow;
  font-size: 12pt;
  text-shadow: black 0.1em 0.1em 0.2em;
  text-align: center;
  position: absolute;
  background-color: rgba(255, 255, 255, 0);
  visibility: hidden;
  top: 45%;
`;

const Image = styled.img`
  transition: transform 0.2s;
  :hover {
    transform: scale(1.1);
  }
`;

const DivImg = styled.div`
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

const RouterLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const MyCarousel = ({ category }) => {
  const [items, setItems] = useState([]);

  const trend = async (value) => {
    const myItems = await getYoutube(value);
    setItems(myItems.items);
  };

  useEffect(() => {
    trend(category.searchValue);
  }, [category.searchValue]);

  return (
    <Main>
      <Title>{category.title}</Title>
      <Carousel breakPoints={breakPoints}>
        {items.map((item) => (
          <DivImg key={item.id.video}>
            <RouterLink
              to={{
                pathname: `/music/${item.id.videoId}`,
                state: { title: item.snippet.title },
              }}
            >
              <Image
                src={item.snippet.thumbnails.medium.url}
                alt={item.snippet.title}
              />
              <SongTitles>{item.snippet.title}</SongTitles>
            </RouterLink>
          </DivImg>
        ))}
      </Carousel>
    </Main>
  );
};

export default MyCarousel;
