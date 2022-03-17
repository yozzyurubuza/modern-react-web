import React from "react";

const VideoItem = function ({ video }) {
  return (
    <div>
      <img
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
      />
      {video.snippet.title}
    </div>
  );
};

export default VideoItem;
