// General imports
import React from "react";
import "./HomePageYouTube.css";

// Component imports
import VideoTopicRow from "../../components/VideoTopicRow/VideoTopicRow";

const HomePageYouTube = () => {
  return (
    <main className="homepage">
      <VideoTopicRow heading="Dogs" searchQuery="dogs" />
      <VideoTopicRow heading="Cats" searchQuery="cats" />
      <VideoTopicRow heading="Animals" searchQuery="animals" />
    </main>
  );
};

export default HomePageYouTube;
