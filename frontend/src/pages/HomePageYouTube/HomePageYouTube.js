import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useVideoSearchResults from "../../hooks/useVideoSearchResults";
import axios from "axios";


const HomePageYouTube = () => {
  const searchResults = useVideoSearchResults("kittens");
  console.log('searchResults on homepage');
  console.log(searchResults);
  return (
    <div>
      <p> Hello World!!!</p>
      {/* <p>{searchResults[0].snippet.channelTitle}</p> */}
    </div>
  );
};

export default HomePageYouTube;
