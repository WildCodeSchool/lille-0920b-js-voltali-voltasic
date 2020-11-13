import React from "react";
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
    <>
      {myTypes.map((item) => (
        <MyCarousel category={item} />
      ))}
    </>
  );
};
export default Home;
