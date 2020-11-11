import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

import { getTrend } from "../api/getTrend";
import { getChannelPicture } from "../api/getChannelPicture";
import "./Home.css";

const Main = styled.div`
  padding: 1%;
`;

const Div = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 25pt;
  color: white;
`;

const SongTitles = styled.p`
  color: lightgray;
  text-align: center;
  position: absolute;
  background-color: rgba(255, 255, 255, 0);
  visibility: hidden;
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
      color: yellow;
    }
  }
`;

const Image = styled.img`
  transition: transform 0.2s;
  :hover {
    filter: grayscale(100%);
    transform: scale(1.1);
  }
`;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Home = () => {
  const [items, setItems] = useState([]);
  const [IdChannel, setIdChannel] = useState([]);
  const [urlPictureChannel, setUrlPictureChannel] = useState({});

  const trend = async () => {
    const myItems = await getTrend();
    //console.log(myItems);
    setItems(myItems.items);
  };

  const channelPicture = async (id) => {
    const picture = await getChannelPicture(id);
    setUrlPictureChannel(picture.items);
  };

  useEffect(() => {
    trend();
    items.map((item) => {
      setIdChannel(item.snippet.channelId);
    });
    channelPicture(IdChannel);
    console.log(IdChannel);
  }, []);

  return (
    <Main>
      <Title>Musiques en tendance</Title>
      <Carousel breakPoints={breakPoints}>
        {items.map((item) => (
          <DivImg key={item.id.video}>
            <Link
              to={{
                pathname: `/trendingmusic/${item.id.videoId}`,
                state: { title: item.snippet.title },
              }}
            >
              <Image
                src={item.snippet.thumbnails.medium.url}
                alt={item.snippet.title}
              />
            </Link>
            <SongTitles>{item.snippet.title}</SongTitles>
          </DivImg>
        ))}
      </Carousel>

      <Title>Artistes en tendance</Title>
      {items.map((item) => (
        <div key={item.id.video}>
          <p>{item.snippet.channelTitle}</p>
          <img
            //src={urlPictureChannel[0].snippet.thumbnails.default.url}
            src=""
            alt={item.snippet.channelTitle}
          />
        </div>
      ))}
    </Main>
  );
};
export default Home;
