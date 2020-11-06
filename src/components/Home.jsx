import React, { useEffect, useState } from "react";
import { getTrend } from "../api/getTrend";

const Home = () => {
  const [items, setItems] = useState([]);

  const trend = async () => {
    const myItems = await getTrend();
    setItems(myItems.items);
  };

  useEffect(() => {
    trend();
  }, []);

  return (
    <div className="home">
      <h1>Home</h1>
    </div>
  );
};

export default Home;
