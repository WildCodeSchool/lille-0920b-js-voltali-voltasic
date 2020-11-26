import { useState, useRef } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

import "./Music.css";

const I = styled.i`
  color: white;
`;

const Ino = styled.i`
  color: rgba(255, 255, 255, 0.1);
`;

const LabelVolume = styled.label`
  font-size: 4vh;
  margin-left: 18%;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;
const Volume = styled.input`
  height: 3vh;
  margin-left: 3%;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;

const LabelLoop = styled.label`
  font-size: 2vh;
  margin-left: 2%;
  font-size: 3vh;
`;

const Checkbox = styled.input`
  visibility: hidden;
`;

const Buttons = styled.div`
  display: flex;
`;

const Loop = styled.div`
  margin-left: 20px;
`;

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

  const handleVolume = e => {
    setVolume(parseFloat(e.target.value));
  };

  const handleToggleLoop = () => {
    setLoop(!loop);
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
      <Buttons>
        <LabelVolume htmlFor="volume">
          <I className="fas fa-volume-up"></I>
        </LabelVolume>
        <Volume
          type="range"
          min={0}
          max={1}
          value={volume}
          step="any"
          onChange={handleVolume}
        />
        <Loop>
          <LabelLoop htmlFor="loop">
            {loop ? (
              <I className="fas fa-undo"></I>
            ) : (
              <Ino className="fas fa-undo"></Ino>
            )}
          </LabelLoop>
          <Checkbox
            id="loop"
            type="checkbox"
            checked={loop}
            onChange={handleToggleLoop}
          />
        </Loop>
      </Buttons>
    </div>
  );
};

export default VideoPlayer;
