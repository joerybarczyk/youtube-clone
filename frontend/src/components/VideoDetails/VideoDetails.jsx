import React from "react";
import "./VideoDetails.css";

const VideoDetails = (props) => {
  return (
    <div className="videodetails">
      <h3 className="vd__title">{props.videoDetails.title}</h3>
      <h5 className="vd__secondarytext">{props.videoDetails.publishedAt}</h5>
      <div className="vd__descriptionbox">
        <h5 className="vd__channelname">{props.videoDetails.channelTitle}</h5>
        <p className="vd__description">{props.videoDetails.description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
