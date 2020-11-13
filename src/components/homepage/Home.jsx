import React from "react";
import TrendMusics from "./TrendMusics";
import SweetMusics from "./Sweet";

import RnbMusics from "./RnbMusics";
import RockMusics from "./RockMusics";

import "./Home.css";
import SoolMusics from "./SoulMusics";

const Home = () => {
  return (
    <>
      <TrendMusics />
      <SoolMusics />
      <SweetMusics />
      <RnbMusics />
      <RockMusics />
    </>
  );
};
export default Home;
