import { useState, useRef } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

import "./Music.css";
const Music = ({ id }) => {
  const inputRange = useRef(null);

  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [loop, setLoop] = useState(false);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };
  const handleVolume = (e) => {
    setVolume(parseFloat(e.target.value));
  };
  const handleToggleLoop = () => {
    setLoop(!loop);
  };

  const handleSeekMouseDown = (e) => {
    setSeeking(true);
  };

  const handleSeekChange = (e) => {
    setPlayed(parseFloat(e.target.value));
  };

  const handleSeekMouseUp = (e) => {
    setSeeking(false);
    inputRange.current.seekTo(parseFloat(e.target.value));
  };

  const handleProgress = (state) => {
    if (!seeking) {
      setPlayed(state.played);
    }
  };

  const SongTitle = styled.h1`
    font-size: 15pt;
  `;

  const Button = styled.button`
    border: 1px solid black;
    border-radius: 10px;
    background-color: #1e1e20;
    color: yellow;
    width: 5vw;
    height: 5vh;
    :hover {
      background-color: yellow;
      color: #1e1e20;
    }
  `;
  const LabelLoop = styled.label`
    font-size: 2vh;
    margin-left: 2%;
    font-size: 3vh;
  `;
  const LabelVolume = styled.label`
    font-size: 4vh;
    margin-left: 8%;
  `;
  const Volume = styled.input`
    height: 3vh;
    margin-left: 7%;
  `;

  const AjustButton = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10%;
    width: 50vw;
    border: 1px solid red;
  `;

  return (
    <div className="lecteur">
      <SongTitle>{id.snippet.title}</SongTitle>
      <ReactPlayer
        ref={inputRange}
        className="player"
        url={`https://www.youtube.com/watch?v=${id.id.videoId} `}
        config={{ file: { attributes: { disablepictureinpicture: "true" } } }}
        volume={volume}
        playing={playing}
        loop={loop}
        onProgress={handleProgress}
        height="0px"
      />
      <AjustButton>
        <Button className="play_button" onClick={handlePlayPause}>
          {playing ? (
            <i className="fas fa-pause"></i>
          ) : (
            <i className="fas fa-play"></i>
          )}
        </Button>
        <LabelLoop htmlFor="loop">
          <i className="fas fa-undo"></i>
        </LabelLoop>
        <input
          id="loop"
          type="checkbox"
          checked={loop}
          onChange={handleToggleLoop}
        />
        <LabelVolume htmlFor="volume">
          <i className="fas fa-volume-up"></i>
        </LabelVolume>
        <Volume
          type="range"
          min={0}
          max={1}
          value={volume}
          step="any"
          onChange={handleVolume}
        />
      </AjustButton>
    </div>
  );
};

export default Music;
