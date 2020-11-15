import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

import {
  Main,
  Title,
  SongTitles,
  DivImg,
  RouterLink,
  Image,
  I,
  Filter,
  Ok,
} from "./CarouselStyled";

import { getYoutube } from "../../api/youtubeApiCall";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const MyCarousel = ({ category }) => {
  const [items, setItems] = useState([]);

  const trend = async value => {
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
        {items.map(item => (
          <Ok>
            <DivImg key={item.id.video}>
              <Image
                src={item.snippet.thumbnails.medium.url}
                alt={item.snippet.title}
              />
              <Filter></Filter>
              <I className="fas fa-play"></I>
            </DivImg>
            <SongTitles>{item.snippet.title}</SongTitles>
          </Ok>
        ))}
      </Carousel>
    </Main>
  );
};

export default MyCarousel;
