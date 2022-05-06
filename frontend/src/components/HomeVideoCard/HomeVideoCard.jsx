import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./HomeVideoCard.css";

const HomeVideoCard = (props) => {
  const navigate = useNavigate();

  const handleClick = function (event) {
    event.preventDefault();
    navigate(`/watch?v=${props.video.videoId}`);
  };

  return (
    <Card bsPrefix="custom-card" onClick={handleClick}>
      <Card.Img bsPrefix="custom-card-img" src={props.video.thumbnail.url} />
      <Card.Title bsPrefix="custom-card-title-h5">
        {props.video.title}
      </Card.Title>
      <Card.Text>{props.video.channelTitle}</Card.Text>
      <Card.Text>{props.video.publishTime}</Card.Text>
    </Card>

    // <div className="home_card" onClick={handleClick}>
    //   <img className="home_img" src={props.video.thumbnail.url} alt="" />
    //   <h5>{props.video.title}</h5>
    //   <p>{props.video.channelTitle}</p>
    //   <p>{props.video.publishTime}</p>
    // </div>
  );
};

export default HomeVideoCard;
