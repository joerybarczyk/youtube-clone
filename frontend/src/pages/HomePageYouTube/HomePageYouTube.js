import React from "react";
import useVideoSearchResults from "../../hooks/useVideoSearchResults";
import HomeVideoCard from "../../components/HomeVideoCard/HomeVideoCard";
import './HomePageYouTube.css'

const HomePageYouTube = () => {
  const [dogSearchResults] = useVideoSearchResults("dogs");
  const [catSearchResults] = useVideoSearchResults("cats");
  const [animalSearchResults] = useVideoSearchResults("animal");

  return (
    <div className="homepage">
      <h5 className="custom-header">DOGS</h5>
      {dogSearchResults != null && (
        <tbody className="home-flex">
          {dogSearchResults.map((video) => {
            return (
              <td>
                <HomeVideoCard key={video.id} video={video} />
              </td>
            );
          })}
        </tbody>
      )}
    <h5 className="custom-header">CATS</h5>
    {catSearchResults != null && (
        <tbody className="home-flex">
          {catSearchResults.map((video) => {
            return (
              <td>
                <HomeVideoCard key={video.id} video={video} />
              </td>
            );
          })}
        </tbody>
      )}
      <h5 className="custom-header">ANIMALS</h5>
    {animalSearchResults != null && (
        <tbody className="home-flex">
          {animalSearchResults.map((video) => {
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
