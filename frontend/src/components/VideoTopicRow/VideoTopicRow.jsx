// General imports
import React from "react";

// Component imports
import HomeVideoCard from "../HomeVideoCard/HomeVideoCard";
import { Row, Col, Container } from "react-bootstrap";

// Hook imports
import useVideoSearchResults from "../../hooks/useVideoSearchResults";

function VideoTopicRow({ heading, searchQuery }) {
  const [searchResults] = useVideoSearchResults(searchQuery);

  return (
    <section>
      <Container>
        <h5>{heading}</h5>
        <Row>
          {searchResults &&
            searchResults.map((video) => {
              return (
                <Col>
                  <HomeVideoCard key={video.id} video={video} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </section>
  );
}

export default VideoTopicRow;
