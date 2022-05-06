import React from "react";
import useVideoSearchResults from "../../hooks/useVideoSearchResults";
import HomeVideoCard from "../../components/HomeVideoCard/HomeVideoCard";
import { Container, Row, Col } from "react-bootstrap";
import "./HomePageYouTube.css";

const HomePageYouTube = () => {
  const [dogSearchResults] = useVideoSearchResults("dogs");
  const [catSearchResults] = useVideoSearchResults("cats");
  const [animalSearchResults] = useVideoSearchResults("animal");

  return (
    <div className="homepage">
      <Container>
        <h5>DOGS</h5>
        {dogSearchResults != null && (
          <Row>
            {dogSearchResults.map((video) => {
              return (
                <Col>
                  <HomeVideoCard key={video.id} video={video} />
                </Col>
              );
            })}
          </Row>
        )}
        <h5>CATS</h5>
        {catSearchResults != null && (
          <Row>
            {catSearchResults.map((video) => {
              return (
                <Col>
                  <HomeVideoCard key={video.id} video={video} />
                </Col>
              );
            })}
          </Row>
        )}
        <h5>ANIMALS</h5>
        {animalSearchResults != null && (
          <Row>
            {animalSearchResults.map((video) => {
              return (
                <Col>
                  <HomeVideoCard key={video.id} video={video} />
                </Col>
              );
            })}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default HomePageYouTube;
