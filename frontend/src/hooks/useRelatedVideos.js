import React, { useState, useEffect } from "react";
import axios from "axios";
import { KEY } from "../localKey.js";

const useRelatedVideos = function (videoId) {
  const [relatedVideos, setRelatedVideos] = useState(null);

  useEffect(() => {
    getRelatedVideos();
  }, [videoId]);

  async function getRelatedVideos() {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${KEY}`
    );

    console.log(response.data.items);
    const formattedResponse = formatRawResults(response.data.items);
    setRelatedVideos(formattedResponse);
  }

  function formatRawResults(rawResults) {
    const formattedResults = rawResults.map((vidObj) => {
      const formattedVidObj = {
        videoId: vidObj.id.videoId,
        channelTitle: vidObj.snippet.channelTitle,
        description: vidObj.snippet.description,
        publishTime: vidObj.snippet.publishTime,
        thumbnail: vidObj.snippet.thumbnails.medium,
        title: vidObj.snippet.title,
      };
      return formattedVidObj;
    });
    return formattedResults;
  }

  return [relatedVideos];
};

export default useRelatedVideos;
