import React, { useState, useEffect } from "react";
import axios from "axios";
import {KEY} from "../localKey.js";

const useVideoSearchResults = function (query) {
  const [searchResults, setSearchResults] = useState(null);
  const apiKey = KEY;

  useEffect(() => {
    getSearchResults();
  }, []);

  async function getSearchResults() {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${apiKey}`
    );
    console.log(response.data.items);
    setSearchResults(response.data.items);
  }

  return searchResults;
};

export default useVideoSearchResults;
