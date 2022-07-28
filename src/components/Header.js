import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";

function Header() {
  const { currentTrackName, isPlaying } = useMusicPlayer();

  return (
    <div className="container-header">
      <div className="header">
        {isPlaying ? <p>{currentTrackName}</p> : <p>Push your hand up!!!</p>}
      </div>
    </div>
  );
}

export default Header;
