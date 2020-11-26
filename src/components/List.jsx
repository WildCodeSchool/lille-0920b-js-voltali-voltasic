import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./List.css";

import { getYoutube } from "../api/youtubeApiCall";

const List = ({ changeVideo }) => {
  const [items, setItems] = useState([]);

  const location = useLocation();

  const handleSearch = async inputValue => {
    const myData = await getYoutube(inputValue);
    setItems(myData.items);
  };

  useEffect(() => {
    if (location.state.query) {
      handleSearch(location.state.query);
    }
  }, [location.state.query]);

  const regex = /&amp;/gi;
  const clip = /clip officiel/gi;

  return (
    <div>
      {items.map(item => (
        <div onClick={() => changeVideo(item)} key={item.id.videoId}>
          <p>
            {item.snippet.title
              .replace(regex, "&")
              .replace(clip, " ")
              .replace(/\(|\)/g, "")
              .replace(/\[|\]/g, "")}
          </p>

          <img
            src={item.snippet.thumbnails.medium.url}
            alt={item.snippet.title}
          />
        </div>
      ))}
    </div>
  );
};
export default List;
