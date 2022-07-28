import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
const TrackList = () => {
  const { trackList, currentTrackIndex, playTrack, isPlaying } =
    useMusicPlayer();

  return (
    <>
      <div className="track-list">
        {trackList.map((track, index) => (
          <button
            className="strack-btn"
            key={index}
            onClick={() => {
              playTrack(index);
            }}
          >
            {currentTrackIndex === index && isPlaying ? (
              <PauseIcon sx={{ height: 19, width: 19 }} />
            ) : (
              <PlayArrowIcon sx={{ height: 19, width: 19 }} />
            )}

            <p>{track.name}</p>
          </button>
        ))}
      </div>
    </>
  );
};

export default TrackList;
