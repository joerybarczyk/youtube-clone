import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./RelatedVideoCard.css";

const RelatedVideoCard = (props) => {
  const navigate = useNavigate();

  const handleClick = function (e) {
    e.preventDefault();
    navigate(`/watch?v=${props.video.videoId}`);
  };

  return (
    <Container>
      <div className="relatedvideocard" onClick={handleClick}>
        <Row>
          <Col xs={5} className="d-flex justify-content-end">
            <img
              className="relvc_thumbnail"
              src={props.video.thumbnail.url}
              alt="video thumbnail"
            />
          </Col>
          <Col xs={7}>
            <p className="relvc__title">{props.video.title}</p>
            <p className="relvc__secondarytext">{props.video.publishTime}</p>
            <p className="relvc__secondarytext">{props.video.channelTitle}</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default RelatedVideoCard;
