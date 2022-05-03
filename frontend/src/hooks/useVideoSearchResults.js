import React, { useState, useEffect } from "react";
import axios from "axios";
import { KEY } from "../localKey.js";

const useVideoSearchResults = function (query) {
  const [searchResults, setSearchResults] = useState(null);
  const apiKey = KEY;

  useEffect(() => {
    getSearchResults();
  }, [query]);

  async function getSearchResults() {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${apiKey}`
    );

    const formattedResponse = formatRawResults(response.data.items);
    setSearchResults(formattedResponse);
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

  return [searchResults];
};

export default useVideoSearchResults;
