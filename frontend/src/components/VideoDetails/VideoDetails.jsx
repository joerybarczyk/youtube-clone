import React, { useState } from "react";
import { publishedAtToMDY } from "../../utils/dateformatting";
import "./VideoDetails.css";

const VideoDetails = ({ videoDetails }) => {
  const { title, channelTitle, description, publishedAt } = videoDetails;

  const [showMoreToggled, setShowMoreToggled] = useState(false);
  const publishedAtMDY = publishedAt ? publishedAtToMDY(publishedAt) : null;

  return (
    <div className="videodetails">
      <h3 className="vd__title">{title}</h3>
      <h5 className="vd__secondarytext">{publishedAtMDY}</h5>
      <div className="vd__descriptionbox">
        <h5 className="vd__channelname">{channelTitle}</h5>
        {showMoreToggled ? (
          <p className="vd__description">{description}</p>
        ) : (
          <p className="vd__description">
            {description ? description.slice(0, 200) : null}
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
