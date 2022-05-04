import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react/cjs/react.production.min";


const HomeVideoCard = (props) => {
  const navigate = useNavigate();

  const handleClick = function (event) {
    event.preventDefault();
    navigate(`/watch?v=${props.video.videoId}`);
  };
  return (
    <Card onClick={handleClick}>
      <Card.Img variant="top" src={props.video.thumbnail.url}/>
      <Card.Title>{props.video.title}</Card.Title>
      <Card.Text>{props.video.channelTitle}</Card.Text>
      <Card.Text>{props.video.publishTime}</Card.Text>

    </Card>
  );
};

export default HomeVideoCard;
