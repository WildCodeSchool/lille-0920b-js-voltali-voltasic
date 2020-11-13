import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

import { getTrend } from "../../api/getTrend";
import { Main, Title, SongTitles, Image, DivImg, RouterLink } from "./Carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const RnbMusics = () => {
  const [items, setItems] = useState([]);
  const [IdChannel, setIdChannel] = useState([]);
  const [searchValue, setSearchValue] = useState(
    "rnb+hip+hop-(bestof+compilation)"
  );

  const trend = async (value) => {
    const myItems = await getTrend(value);
    setItems(myItems.items);
  };

  useEffect(() => {
    trend(searchValue);
    items.map((item) => {
      setIdChannel(item.snippet.channelId);
    });
  }, []);

  return (
    <Main>
      <Title>RnB et Hip-Hop</Title>
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

export default RnbMusics;
