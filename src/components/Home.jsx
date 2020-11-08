import React, { useEffect, useState } from "react";
import { getTrend } from "../api/getTrend";
import { getChannelPicture } from "../api/getChannelPicture";
const Home = () => {
  const [items, setItems] = useState([]);
  const [channelPic, setChannelPic] = useState([]);
  const [urlPictureChannel, setUrlPictureChannel] = useState({});

  const trend = async () => {
    const myItems = await getTrend();
    //console.log(myItems);
    setItems(myItems.items);
  };

  const channelPicture = async idChannel => {
    const picture = await getChannelPicture(idChannel);
    //console.log(picture.items[0].snippet.thumbnails.default.url);
    setUrlPictureChannel(picture);
  };

  useEffect(() => {
    trend();
    items.map(item => setChannelPic(item.snippet.channelId));
    channelPicture(channelPic);
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
          <img src="" alt={item.snippet.channelTitle} />
        </div>
      ))}
    </div>
  );
};

export default Home;
