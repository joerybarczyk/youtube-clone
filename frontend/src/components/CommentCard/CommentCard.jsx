import React from "react";
import { Card } from "react-bootstrap";

const CommentCard = ({ comment }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{comment.user.username}</Card.Title>
        <Card.Text>{comment.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CommentCard;
