// General imports
import React from "react";

// Component imports
import Video from "../../components/Video/Video";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import CommentSection from "../../components/CommentSection/CommentSection";
import { Row, Col, Container } from "react-bootstrap";

// Hook imports
import { useSearchParams } from "react-router-dom";
import useRelatedVideos from "../../hooks/useRelatedVideos";
import useVideoDetails from "../../hooks/useVideoDetails";

function IndividualVideoPage(props) {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [videoDetails] = useVideoDetails(videoId);
  const [relatedVideos] = useRelatedVideos(videoId);

  return (
    <main>
      <Container>
        <Row>
          <Col xl={7}>
            <Row>
              <Video videoId={videoId} />
            </Row>
            <Row>
              <VideoDetails videoDetails={videoDetails} />
            </Row>
            <Row>
              <CommentSection videoId={videoId} />
            </Row>
          </Col>
          <Col xl={5}>
            <RelatedVideos relatedVideos={relatedVideos} />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default IndividualVideoPage;
