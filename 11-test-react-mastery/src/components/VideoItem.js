import "./VideoItem.css";
import React from "react";

//Pass onVideoSelect function from parent component (App)
const VideoItem = function ({ video, onVideoSelect }) {
  return (
    //Connecting to parent component (App), use callback function (onVideoSelect)
    //Whenever a video is clicked (div) from the video list, onVideoSelect function will set the the video in the main window (selectedVideo)
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header" style={{ fontSize: "min(2vw, 14px)" }}>
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
