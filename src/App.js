import React from "react";

import MediaControlCard from "./components/MediaControlCard";

import TrackList from "./components/TrackList";
import Header from "./components/Header";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const App = () => {
  const theme = createTheme({
    shape: { borderRadius: 48 },
  });
  return (
    <ThemeProvider theme={theme}>
      <MusicPlayerProvider>
        <div className="container">
          <Header />
          <TrackList />
          <MediaControlCard />
        </div>
      </MusicPlayerProvider>
    </ThemeProvider>
  );
};

export default App;
