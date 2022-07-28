import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import IconButton from "@mui/material/IconButton";
import PauseIcon from "@mui/icons-material/Pause";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import useMusicPlayer from "../hooks/useMusicPlayer";

export default function MediaControlCard() {
  const theme = useTheme();

  const {
    currentTrackIndex,
    isPlaying,
    playTrack,
    playPreviousTrack,
    playNextTrack,
  } = useMusicPlayer();

  const handleTogglePlay = () => {
    console.log("first");
    if (currentTrackIndex) {
      playTrack(currentTrackIndex);
    } else {
      playTrack(0);
    }
  };

  const handlePlayPreviousTrack = () => {
    console.log("sec");
    playPreviousTrack();
  };

  const handlePlayNextTrack = () => {
    console.log("third");
    playNextTrack();
  };
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-around",
        position: "absolute",
        bottom: "20px",
        left: "25%",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            pl: 0,
            pb: 0,
          }}
        >
          <IconButton aria-label="previous" onClick={handlePlayPreviousTrack}>
            {theme.direction === "rtl" ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          {!isPlaying ? (
            <IconButton aria-label="play/pause" onClick={handleTogglePlay}>
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
          ) : (
            <IconButton aria-label="play/pause" onClick={handleTogglePlay}>
              <PauseIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
          )}
          <IconButton aria-label="next" onClick={handlePlayNextTrack}>
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
