import { useState, useRef } from "react";
import ReactPlayer from "react-player";

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
  console.log(id);
  return (
    <div>
      <h1>{id.snippet.title}</h1>
      <ReactPlayer
        ref={inputRange}
        className="player"
        url={`https://www.youtube.com/watch?v=${id.id.videoId} `}
        config={{ file: { attributes: { disablepictureinpicture: "true" } } }}
        volume={volume}
        playing={playing}
        loop={loop}
        onProgress={handleProgress}
      />
      <button onClick={handlePlayPause}>{playing ? "Pause" : "Play"}</button>
      <label htmlFor="volume">Volume</label>
      <input
        type="range"
        min={0}
        max={1}
        value={volume}
        step="any"
        onChange={handleVolume}
      />
      <br />
      <label htmlFor="loop">Loop</label>
      <input
        id="loop"
        type="checkbox"
        checked={loop}
        onChange={handleToggleLoop}
      />
      <br />
      Played
      <progress max={1} value={played} />
      <br />
      Seek
      <input
        className="range_css"
        type="range"
        min={0}
        max={0.999999}
        step="any"
        value={played}
        onMouseDown={handleSeekMouseDown}
        onChange={handleSeekChange}
        onMouseUp={handleSeekMouseUp}
      />
    </div>
  );
};

export default Music;
