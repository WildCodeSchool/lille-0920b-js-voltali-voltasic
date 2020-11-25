import { useState, useRef } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

import "./Music.css";
const VideoPlayer = ({ id }) => {
  const inputRange = useRef(null);

  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [loop, setLoop] = useState(false);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);

  const handleProgress = state => {
    if (!seeking) {
      setPlayed(state.played);
    }
  };

  return (
    <div className="video-player">
      <ReactPlayer
        ref={inputRange}
        url={`https://www.youtube.com/watch?v=${id.id.videoId} `}
        config={{ file: { attributes: { disablepictureinpicture: "true" } } }}
        volume={volume}
        playing={playing}
        loop={loop}
        onProgress={handleProgress}
        height="45vh"
      />
    </div>
  );
};

export default VideoPlayer;
