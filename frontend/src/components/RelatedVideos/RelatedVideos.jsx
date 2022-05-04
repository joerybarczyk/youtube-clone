import React from "react";
import HomeVideoCard from "../HomeVideoCard/HomeVideoCard";

const RelatedVideos = (props) => {
  return (
    <>
      {props.relatedVideos != null && (
        <tbody>
          {props.relatedVideos.map((video) => {
            return (
              <tr>
                <HomeVideoCard video={video} />
              </tr>
            );
          })}
        </tbody>
      )}
    </>
  );
};

export default RelatedVideos;
