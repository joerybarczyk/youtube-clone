import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./ResultsVideoCard.css";

const ResultVideoCard = (props) => {
  const navigate = useNavigate();

  const handleClick = function (e) {
    e.preventDefault();
    navigate(`/watch?v=${props.video.videoId}`);
  };

  return (
    <Container>
      <div className="resultvideocard" onClick={handleClick}>
        <Row>
          <Col xs={5} className="d-flex justify-content-end">
            <img src={props.video.thumbnail.url} alt="video thumbnail" />
          </Col>
          <Col xs={7}>
            <p className="rvc__title">{props.video.title}</p>
            <p className="rvc__secondarytext">{props.video.publishTime}</p>
            <p className="rvc__secondarytext">{props.video.channelTitle}</p>
            <p className="rvc__secondarytext">{props.video.description}</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ResultVideoCard;
