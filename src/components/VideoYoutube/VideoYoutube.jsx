import React from 'react';
import ReactPlayer from 'react-player';

const YouTubeVideo = ({ videoId, isMute = false, isPlay = true }) => {
  return (
    <ReactPlayer
      url={videoId}
      width="100%"
      height="100%"
      muted={isMute}
      playing={isPlay}
    />
  );
};

export default YouTubeVideo;
