import React from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import useRelatedVideos from "../../hooks/useRelatedVideos";
import useVideoDetails from "../../hooks/useVideoDetails";
import Video from "../../components/Video/Video";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import { Row, Col, Container } from "react-bootstrap";
import CommentSection from "../../components/CommentSection/CommentSection";

function IndividualVideoPage(props) {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [videoDetails] = useVideoDetails(videoId);
  const [relatedVideos] = useRelatedVideos(videoId);

  return (
    <div>
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
    </div>
  );
}

export default IndividualVideoPage;
