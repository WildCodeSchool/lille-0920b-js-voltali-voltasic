import { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

import "./Music.css";
const Music = () => {
  let { idVideo } = useParams();
  let location = useLocation();

  const inputRange = useRef(null);

  const [playing, setPlaying] = useState(false);
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

  const FirstLine = styled.div`
    display: flex;
    justify-content: flex-start;
  `;

  const Button = styled.button`
    border: 1px solid black;
    border-radius: 10px;
    background-color: #1e1e20;
    color: yellow;
    width: 8vw;
    height: 5vh;
    :hover {
      background-color: yellow;
      color: #1e1e20;
    }
  `;

  const LabelLoop = styled.label`
    font-size: 2vh;
    margin-top: 1%;
    margin-left: 1%;
  `;

  const LabelVolume = styled.label`
    font-size: 2.5vh;
    margin-top: 0.8%;
    margin-left: 4%;
  `;

  const Volume = styled.input`
    height: 2vh;

    margin-top: 1%;
  `;

  return (
    <div className="lecteur">
      <h1>{location.state.title}</h1>
      <ReactPlayer
        ref={inputRange}
        className="player"
        url={`https://www.youtube.com/watch?v=${idVideo} `}
        config={{ file: { attributes: { disablepictureinpicture: "true" } } }}
        volume={volume}
        playing={playing}
        loop={loop}
        onProgress={handleProgress}
        height="0px"
      />
      <FirstLine>
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
      </FirstLine>
    </div>
  );
};

export default Music;
