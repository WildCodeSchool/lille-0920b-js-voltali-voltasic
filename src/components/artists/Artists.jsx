import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

import mock from "./../../api/mock.json";
import { Title, SongTitles, Img, DivImg } from "../homepage/CarouselStyled";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const TrendArtists = () => {
  const [data, setData] = useState([]);

  const getMock = () => {
    setData(mock.items);
  };

  useEffect(() => {
    getMock();
  }, []);

  const Main = styled.div`
    @media screen and (max-width: 500px) {
      padding-top: 8%;
    }
    @media screen and (min-width: 501px) {
      background-color: black;
      padding-top: 5%;
    }
  `;

  return (
    <Main>
      <Title>Artistes du moment</Title>
      <Carousel breakPoints={breakPoints}>
        {data.map((item) => (
          <DivImg key={item.id.videoId}>
            <Link
              to={{
                pathname: `/playlist/${item.snippet.channelId}`,
                state: { item: item },
              }}
            >
              <Img
                src={item.snippet.thumbnails.channelPic.url}
                alt={item.snippet.channelTitle}
              />
              <SongTitles>{item.snippet.channelTitle}</SongTitles>
            </Link>
          </DivImg>
        ))}
      </Carousel>
    </Main>
  );
};

export default TrendArtists;
