import React from "react";

const VideoDetail = function ({ video }) {
  //Return immediately in case video is null
  if (!video) return <div>Loading....</div>;

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
        <p style={{ fontSize: "min(2vw, 14px)" }}>
          {video.snippet.description}
        </p>
      </div>
    </div>
  );
};

export default VideoDetail;
