import React from "react";
import RelatedVideoCard from "../RelatedVideoCard/RelatedVideo";

const RelatedVideos = (props) => {
  return (
    <>
      {props.relatedVideos != null && (
        <tbody>
          {props.relatedVideos.map((video) => {
            return (
              <tr>
                <RelatedVideoCard video={video} />
              </tr>
            );
          })}
        </tbody>
      )}
    </>
  );
};

export default RelatedVideos;
