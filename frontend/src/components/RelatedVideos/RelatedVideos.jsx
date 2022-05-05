import React from "react";
import ResultVideoCard from "../ResultVideoCard/ResultVideoCard";

const RelatedVideos = (props) => {
  return (
    <>
      {props.relatedVideos != null && (
        <tbody>
          {props.relatedVideos.map((video) => {
            return (
              <tr>
                <ResultVideoCard video={video} />
              </tr>
            );
          })}
        </tbody>
      )}
    </>
  );
};

export default RelatedVideos;
