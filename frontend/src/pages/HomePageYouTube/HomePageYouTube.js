import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useVideoSearchResults from "../../hooks/useVideoSearchResults";
import HomeVideoCard from "../../components/HomeVideoCard/HomeVideoCard";

const HomePageYouTube = () => {
  const [searchResults] = useVideoSearchResults("kittens");

  return (
    <div>
      <p> Hello World!!!</p>
      {searchResults != null && (
        <tbody>
          {searchResults.map((video) => {
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
};

export default HomePageYouTube;
