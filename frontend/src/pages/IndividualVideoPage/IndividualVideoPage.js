import React from "react";
import { useSearchParams } from "react-router-dom";
import useRelatedVideos from "../../hooks/useRelatedVideos";
import HomeVideoCard from "../../components/HomeVideoCard/HomeVideoCard";

function IndividualVideoPage(props) {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [relatedVideos] = useRelatedVideos(videoId);

  return (
    <div>
      <h1>Individual Video Page</h1>
      <h3>Video Id: {videoId}</h3>
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
      />
      {relatedVideos != null && (
        <tbody>
          {relatedVideos.map((video) => {
            return (
              <td>
                <HomeVideoCard video={video} />
              </td>
            );
          })}
        </tbody>
      )}
    </div>
  );
}

export default IndividualVideoPage;
