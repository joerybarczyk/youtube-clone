import React from "react";

const Video = (props) => {
  return (
    <>
      <iframe
        title="Youtube video"
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${props.videoId}?autoplay=0`}
        frameborder="0"
      />
    </>
  );
};

export default Video;