import React from "react";
import useVideoSearchResults from "../../hooks/useVideoSearchResults";
import HomeVideoCard from "../../components/HomeVideoCard/HomeVideoCard";

const HomePageYouTube = () => {
  const [searchResults] = useVideoSearchResults("dogs");

  return (
    <div>
      {searchResults != null && (
        <tbody>
          {searchResults.map((video) => {
            return (
              <td>
                <HomeVideoCard key={video.id} video={video} />
              </td>
            );
          })}
        </tbody>
      )}
    </div>
  );
};

export default HomePageYouTube;
