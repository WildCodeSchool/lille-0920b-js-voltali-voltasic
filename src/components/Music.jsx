import { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { useLocation, useParams } from "react-router-dom";

import "./Music.css";
const Music = () => {
  let { idVideo } = useParams();
  let location = useLocation();
  console.log(location);

  const inputRange = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [loop, setLoop] = useState(false);
  const [played, setPlayed] = useState(0);
  const [loaded, setLoaded] = useState(0);
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
    console.log("onProgress", state);
    if (!seeking) {
      setPlayed(state.played);
    }
  };

  return (
    <div>
      <h1>{location.state.title}</h1>
      <ReactPlayer
        ref={inputRange}
        className="player"
        url={`https://www.youtube.com/watch?v=${idVideo} `}
        config={{ file: { attributes: { disablepictureinpicture: "true" } } }}
        onDisablePIP={true}
        volume={volume}
        playing={playing}
        loop={loop}
        onProgress={handleProgress}
      />
      <button onClick={handlePlayPause}>{playing ? "Pause" : "Play"}</button>
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
