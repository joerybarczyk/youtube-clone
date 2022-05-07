import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { publishedAtToHowLongSince } from "../../utils/dateformatting";
import "./ResultsVideoCard.css";

const ResultVideoCard = ({ video }) => {
  const navigate = useNavigate();
  const publishedHowLongSince = publishedAtToHowLongSince(video.publishTime);

  const handleClick = function (e) {
    e.preventDefault();
    navigate(`/watch?v=${video.videoId}`);
  };

  return (
    <Container>
      <div className="resultvideocard" onClick={handleClick}>
        <Row>
          <Col xs={5} className="d-flex justify-content-end">
            <img src={video.thumbnail.url} alt="video thumbnail" />
          </Col>
          <Col xs={7}>
            <p className="rvc__title">{video.title}</p>
            <p className="rvc__secondarytext">{publishedHowLongSince}</p>
            <p className="rvc__secondarytext">{video.channelTitle}</p>
            <p className="rvc__secondarytext">{video.description}</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ResultVideoCard;
