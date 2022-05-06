import React, { useState, useEffect } from "react";
import axios from "axios";
import { KEY } from "../localKey.js";

const useVideoSearchResults = function (query, maxResults = 4) {
  const [searchResults, setSearchResults] = useState(null);
  const apiKey = KEY;

  useEffect(() => {
    async function getSearchResults() {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${apiKey}&type=video&maxResults=${maxResults}`
      );

      const formattedResponse = formatRawResults(response.data.items);
      setSearchResults(formattedResponse);
    }

    getSearchResults();
  }, [query, apiKey]);

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

  return [searchResults];
};

export default useVideoSearchResults;
