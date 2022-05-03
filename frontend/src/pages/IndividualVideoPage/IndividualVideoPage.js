import React from "react";
import { useSearchParams } from "react-router-dom";

function IndividualVideoPage(props) {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  return (
    <div>
      <h1>Individual Video Page</h1>
      <h3>Video Id: {videoId}</h3>
    </div>
  );
}

export default IndividualVideoPage;
