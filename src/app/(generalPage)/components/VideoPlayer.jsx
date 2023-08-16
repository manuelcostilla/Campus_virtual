import React from "react";

const VideoPlayer = ({ videoId }) => {
  return (
    <div>
      <iframe
        width="500px"
        height="500px"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
