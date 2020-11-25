import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

import {
  Main,
  Title,
  SongTitles,
  DivImg,
  Image,
  Container,
  Filter,
  I,
} from "./CarouselStyled";

import { getYoutube } from "../../api/youtubeApiCall";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const MyCarousel = ({ category, changeVideo }) => {
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
          <DivImg key={item.id.videoId} onClick={() => changeVideo(item)}>
            <Container>
              <Image
                src={item.snippet.thumbnails.medium.url}
                alt={item.snippet.title}
              />
              <Filter>
                <I className="fas fa-play"></I>
              </Filter>
            </Container>
            <SongTitles>{item.snippet.title}</SongTitles>
          </DivImg>
        ))}
      </Carousel>
    </Main>
  );
};

export default MyCarousel;
