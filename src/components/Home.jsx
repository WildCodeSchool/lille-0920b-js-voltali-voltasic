import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getTrend } from "../api/getTrend";
import { getChannelPicture } from "../api/getChannelPicture";
import { Carousel } from "react-responsive-carousel";

/*import " carrousel-réactif / lib / styles / carousel.min.css ";*/

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
    <Carousel>
      <div className="home">
        <h1>Musiques en tendance</h1>
        {items.map((item) => (
          <div key={item.id.video}>
            <p>{item.snippet.title}</p>
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
          </div>
        ))}
        <h1>Artistes en tendance</h1>
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
      </div>
    </Carousel>
  );
};
export default Home;
