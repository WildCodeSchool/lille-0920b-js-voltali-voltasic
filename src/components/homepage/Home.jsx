import React from "react";

import TrendArtists from "./Artists";

import "./Home.css";
import MyCarousel from "./MyCarousel";

const myTypes = [
  {
    title: "Musiques en tendance",
    searchValue: "musique+tendance+fr",
  },
  {
    title: "Soul",
    searchValue: "soul+musics",
  },
  {
    title: "Détente",
    searchValue: "ambiance+musics+sweet+musics+love+musics",
  },
  {
    title: "Rock",
    searchValue: "rocknrollmusic+grungemusic",
  },
  {
    title: "RnB et Hip-Hop",
    searchValue: "rnb+hip+hop-(bestof+compilation)",
  },
];
const Home = () => {
  return (
    <div className="main">
      <TrendArtists />
      {myTypes.map((item) => (
        <MyCarousel category={item} />
      ))}
    </div>
  );
};
export default Home;
