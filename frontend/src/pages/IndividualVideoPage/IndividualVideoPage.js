import React from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import useRelatedVideos from "../../hooks/useRelatedVideos";
import Video from "../../components/Video/Video";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import { Row, Col, Container } from "react-bootstrap";
import CommentSection from "../../components/CommentSection/CommentSection";

function IndividualVideoPage(props) {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [relatedVideos] = useRelatedVideos(videoId);
  const { state } = useLocation();
  const videoDetails = state;

  return (
    <div>
      <Container>
        <Row>
          <Col md={9}>
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
          <Col md={3}>
            <RelatedVideos relatedVideos={relatedVideos} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default IndividualVideoPage;
