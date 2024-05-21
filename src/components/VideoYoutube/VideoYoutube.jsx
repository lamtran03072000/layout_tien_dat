import React from 'react';

const YouTubeVideo = ({ videoId }) => {
  const src = `https://www.youtube.com/embed/${videoId}`;
  return (
    <iframe
      width="100%"
      height="100%"
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded YouTube Video"
    ></iframe>
  );
};

export default YouTubeVideo;
