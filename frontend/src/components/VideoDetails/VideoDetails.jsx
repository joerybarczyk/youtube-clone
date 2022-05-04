import React from "react";

const VideoDetails = (props) => {
  return (
    <div>
      <h3>{props.videoDetails.title}</h3>
      <h5>{props.videoDetails.channelTitle}</h5>
      <h5>{props.videoDetails.publishTime}</h5>
      <p>{props.videoDetails.description}</p>
    </div>
  );
};

export default VideoDetails;
