import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

import { Main, Title, SongTitles, DivImg, Image } from "./CarouselStyled";

import { getYoutube } from "../../api/youtubeApiCall";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const MyCarousel = ({ category, changeVideo, setIdVid }) => {
  const [items, setItems] = useState([]);

  const trend = async value => {
    const myItems = await getYoutube(value);
    setItems(myItems.items);
  };

  useEffect(() => {
    trend(category.searchValue);
  }, [category.searchValue]);

  const regex = /&amp;/gi;
  const clip = /clip officiel/gi;

  const play = item => {
    changeVideo(item);
    setIdVid(false);
  };
  return (
    <Main>
      <Title>{category.title}</Title>
      <Carousel breakPoints={breakPoints}>
        {items.map(item => (
          <DivImg key={item.id.videoId} onClick={() => play(item)}>
            <Image
              src={item.snippet.thumbnails.medium.url}
              alt={item.snippet.title}
            />
            <SongTitles>
              {item.snippet.title
                .replace(regex, "&")
                .replace(clip, " ")
                .replace(/\(|\)/g, "")
                .replace(/\[|\]/g, "")}
            </SongTitles>
          </DivImg>
        ))}
      </Carousel>
    </Main>
  );
};

export default MyCarousel;
