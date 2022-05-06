import React, { useState, useEffect } from "react";
import axios from "axios";
import { KEY } from "../localKey";

const useVideoDetails = function (videoId) {
  const [videoDetails, setVideoDetails] = useState([]);

  useEffect(() => {
    async function getVideoDetails() {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${KEY}`
      );
      setVideoDetails(response.data.items[0].snippet);
    }
    getVideoDetails();
  }, [videoId]);

  return [videoDetails];
};

export default useVideoDetails;
