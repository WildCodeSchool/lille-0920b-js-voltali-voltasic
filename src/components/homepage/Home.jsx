import React from "react";
import TrendMusics from "./TrendMusics";
import SweetMusics from "./Sweet";

import RnbMusics from "./RnbMusics";
import RockMusics from "./RockMusics";

import "./Home.css";

const Home = () => {
  return (
    <>
      <TrendMusics />
      <SweetMusics />
      <RnbMusics />
      <RockMusics />
    </>
  );
};
export default Home;
