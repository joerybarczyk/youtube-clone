import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomeVideoCard = (props) => {
  const navigate = useNavigate();

  const handleClick = function (event) {
    event.preventDefault();
    navigate(`/watch?v=${props.video.videoId}`, { state: props.video });
  };
  return (
    <Card onClick={handleClick}>
      <Card.Img variant="top" src={props.video.thumbnail.url} />
      <Card.Title>{props.video.title}</Card.Title>
      <Card.Text>{props.video.channelTitle}</Card.Text>
      <Card.Text>{props.video.publishTime}</Card.Text>
    </Card>
  );
};

export default HomeVideoCard;
