import React from "react";

const Video = ({ videoId }) => {
  return (
    <>
      <iframe
        title="Youtube video"
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
        frameBorder="0"
      />
    </>
  );
};

export default Video;
