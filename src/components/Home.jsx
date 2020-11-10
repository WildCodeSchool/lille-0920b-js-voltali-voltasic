import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

import { getTrend } from "../api/getTrend";
import { getChannelPicture } from "../api/getChannelPicture";
import "./Home.css";
/*
const Carousl = styled.div`
  text-align: center;
  padding: 2px;
`;
*/
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

  const channelPicture = async id => {
    const picture = await getChannelPicture(id);
    setUrlPictureChannel(picture.items);
  };

  useEffect(() => {
    trend();
    items.map(item => {
      setIdChannel(item.snippet.channelId);
    });
    channelPicture(IdChannel);
    console.log(IdChannel);
  }, []);

  return (
    <div className="home">
      <h1>Musiques en tendance</h1>

      {items.map(item => (
        <div key={item.id.video} className="carousel">
          <Carousel breakPoints={breakPoints}>
            <Link
              to={{
                pathname: `/trendingmusic/${item.id.videoId}`,
                state: { title: item.snippet.title },
              }}
            >
              <img
                src={item.snippet.thumbnails.medium.url}
                alt={item.snippet.title}
              />
            </Link>
          </Carousel>
          <p>{item.snippet.title}</p>
        </div>
      ))}

      <h1>Artistes en tendance</h1>
      {items.map(item => (
        <div key={item.id.video}>
          <p>{item.snippet.channelTitle}</p>
          <img
            //src={urlPictureChannel[0].snippet.thumbnails.default.url}
            src=""
            alt={item.snippet.channelTitle}
          />
        </div>
      ))}
    </div>
  );
};
export default Home;
