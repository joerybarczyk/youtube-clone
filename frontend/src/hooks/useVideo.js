import React, { useState, useEffect } from "react";
import axios from "axios";

const useVideoSearchResults = function (query) {
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    getSearchResults();
  }, []);

  async function getSearchResults() {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${query}&key=${apiKey}`
    );
    console.log(response.data);
    setSearchResults(response.data);
  }

  return searchResults;
};

export default useVideoSearchResults;
