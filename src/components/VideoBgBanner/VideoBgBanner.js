import React from 'react';
import ReactPlayer from 'react-player';
import './VideoBgBanner.css';
const VideoBgBanner = ({ url }) => {
  return (
    <div className="react-player-wrapper">
      <ReactPlayer
        url={url}
        playing
        loop
        muted
        controls={false}
        width="100%"
        height="100%"
        className="react-player"
        // playsInline
        playsinline
      />
    </div>
  );
};

export default VideoBgBanner;
