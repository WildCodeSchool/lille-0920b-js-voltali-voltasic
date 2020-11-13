import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

import { getTrend } from "../../api/getTrend";
import { getChannelPicture } from "../../api/getChannelPicture";
import { Main, Title, SongTitles, Img, DivImg, RouterLink } from "./Carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const TrendArtists = () => {
  const [items, setItems] = useState([]);
  const [IdChannel, setIdChannel] = useState([]);
  const [searchValue, setSearchValue] = useState("musique+tendance+fr");
  const [urlPictureChannel, setUrlPictureChannel] = useState({});

  const channelPicture = async id => {
    const picture = await getChannelPicture(id);
    setUrlPictureChannel(picture.items);
  };

  const trend = async value => {
    const myItems = await getTrend(value);
    setItems(myItems.items);
  };

  useEffect(() => {
    trend(searchValue);
    channelPicture(IdChannel);
    console.log(IdChannel);
    items.map(item => {
      setIdChannel(item.snippet.channelId);
    });
  }, []);

  return (
    <Main>
      <Title>Artistes du moment</Title>
      <Carousel breakPoints={breakPoints}>
        {items.map(item => (
          <DivImg key={item.id.video}>
            <RouterLink
              to={{
                pathname: `/music/${item.id.videoId}`,
                state: { title: item.snippet.title },
              }}
            >
              <Img
                src={urlPictureChannel[0].snippet.thumbnails.default.url}
                alt={item.snippet.channelTitle}
              />
              <SongTitles>{item.snippet.channelTitle}</SongTitles>
            </RouterLink>
          </DivImg>
        ))}
      </Carousel>
    </Main>
  );
};

export default TrendArtists;
