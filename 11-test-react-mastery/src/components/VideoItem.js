import "./VideoItem.css";
import React from "react";

const VideoItem = function ({ video, onVideoSelect }) {
  return (
    //Connecting to parent component (App), use callback function (onVideoSelect)
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
