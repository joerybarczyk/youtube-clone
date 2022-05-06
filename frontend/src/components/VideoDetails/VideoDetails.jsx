import React, { useState } from "react";
import { publishedAtToMDY } from "../../utils/dateformatting";
import "./VideoDetails.css";

const VideoDetails = (props) => {
  const [showMoreToggled, setShowMoreToggled] = useState(false);
  const description = props.videoDetails.description;
  const publishedAtMDY = props.videoDetails.publishedAt
    ? publishedAtToMDY(props.videoDetails.publishedAt)
    : null;

  return (
    <div className="videodetails">
      <h3 className="vd__title">{props.videoDetails.title}</h3>
      <h5 className="vd__secondarytext">{publishedAtMDY}</h5>
      <div className="vd__descriptionbox">
        <h5 className="vd__channelname">{props.videoDetails.channelTitle}</h5>
        {showMoreToggled ? (
          <p className="vd__description">{props.videoDetails.description}</p>
        ) : (
          <p className="vd__description">
            {props.videoDetails.description
              ? props.videoDetails.description.slice(0, 200)
              : null}
          </p>
        )}
        <div className="vd__showmore">
          {description && description.length > 200 ? (
            <button
              className="vd__showmoretext"
              onClick={() => setShowMoreToggled(!showMoreToggled)}
            >
              {showMoreToggled ? "SHOW LESS" : "SHOW MORE"}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
