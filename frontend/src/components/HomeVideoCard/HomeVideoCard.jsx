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
    <Card>
      <Card.Img variant="top" src={props.video.thumbnail.url}/>
      <Card.Title>{props.video.title}</Card.Title>
      <Card.Text>{props.video.channelName}</Card.Text>
      <Card.Text>{props.video.date}</Card.Text>

    </Card>

    





    // <div onClick={handleClick}>
    //   <img
    //     class="card-img-top"
    //     src={props.video.thumbnail.url}
    //     alt="Thumbnail URL"
    //   />
    //   <div class="card-body">
    //     <h5 class="card-title">{props.video.title}</h5>
    //     <h6 class="card-text">{props.video.channelName}</h6>
    //     <p>{props.video.date}</p>
    //   </div>
    // </div>
  );
};

export default HomeVideoCard;
