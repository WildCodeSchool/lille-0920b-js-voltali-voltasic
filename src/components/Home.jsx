import React, { useEffect, useState } from "react";
import { getTrend } from "../api/getTrend";
import { getChannelPicture } from "../api/getChannelPicture";
const Home = () => {
  const [items, setItems] = useState([]);
  const [channelPic, setChannelPic] = useState([]);

  const trend = async () => {
    const myItems = await getTrend();
    //console.log(myItems);
    setItems(myItems.items);
  };

  useEffect(() => {
    trend();
  }, []);

  return (
    <div className="home">
      <h1>Musiques en tendance</h1>
      {items.map(item => (
        <div key={item.id.video}>
          <p>{item.snippet.title}</p>
          <img
            src={item.snippet.thumbnails.medium.url}
            alt={item.snippet.title}
          />
        </div>
      ))}
      <h1>Artistes en tendance</h1>
      {items.map(item => (
        <div key={item.id.video}>
          <p>{item.snippet.channelTitle}</p>
          <img
            src={item.snippet.thumbnails.medium.url}
            alt={item.snippet.title}
          />
        </div>
      ))}
    </div>
  );
};

export default Home;
