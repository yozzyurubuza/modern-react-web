import React from "react";
import "../css/App.css";

const VideoDetail = function ({ video, loadingMsg }) {
  //Return immediately in case video is null
  if (!video) return <div>{loadingMsg}</div>;

  //Process fetched data and put into URL
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  //Embed a video player using iframe tag
  //ui segment to put a simple title and description below.
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4>{video.snippet.title}</h4>
        <p className="vid-description">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
