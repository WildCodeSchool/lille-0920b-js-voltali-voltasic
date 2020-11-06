import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./List.css";

import { getYoutube } from "../api/youtubeApiCall";

const List = () => {
  const [items, setItems] = useState([]);

  const location = useLocation();

  const handleSearch = async (inputValue) => {
    const myData = await getYoutube(inputValue);
    setItems(myData.items);
  };

  useEffect(() => {
    if (location.state.query) {
      handleSearch(location.state.query);
    }
  }, [location.state.query]);
  return (
    <div>
      {items.map((item) => (
        <div key={item.id.videoId}>
          <p>{item.snippet.title}</p>
          <Link
            to={{
              pathname: `/music/${item.id.videoId}`,
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
    </div>
  );
};
export default List;
