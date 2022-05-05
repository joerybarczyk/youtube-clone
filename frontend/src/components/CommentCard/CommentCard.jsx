import React from "react";
import LikeButton from "../LikeButton/LikeButton";
import DislikeButton from "../DislikeButton/DislikeButton";
import "./CommentCard.css";

const CommentCard = (props) => {
  return (
    // <Card>
    //   <Card.Body>
    //     <Card.Title>{comment.user.username}</Card.Title>
    //     <Card.Text>{comment.text}</Card.Text>
    //   </Card.Body>
    // </Card>
    <div className="comment__body">
      <h4>{props.comment.user.username}</h4>
      <p>{props.comment.text}</p>
      <LikeButton
        comment={props.comment}
        getAllComments={props.getAllComments}
      />
      <DislikeButton
        comment={props.comment}
        getAllComments={props.getAllComments}
      />
    </div>
  );
};

export default CommentCard;
