import React from "react";
import TrendMusics from "./TrendMusics";
import TrendArtists from "./Artists";

import "./Home.css";

const Home = () => {
  return (
    <>
      <TrendArtists />
      <TrendMusics />
    </>
  );
};
export default Home;
