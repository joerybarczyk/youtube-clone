import React, { useState, useEffect } from "react";
import LikeButton from "../LikeButton/LikeButton";
import DislikeButton from "../DislikeButton/DislikeButton";
import "./CommentCard.css";
import GetReplies from "../GetReplies/GetReplies";
import AddReplyForm from "../AddReplyForm/AddReplyForm";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const CommentCard = (props) => {
  const [user, token] = useAuth();
  const [replies, setReplies] = useState(null);

  useEffect(() => {
    getAllReplies();
  }, []);

  async function getAllReplies() {
    let response = await axios
      .get(`http://127.0.0.1:8000/api/replies/?commentId=${props.comment.id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .catch((error) => {
        console.log(error.response);
      });
    console.log(response);
    setReplies(response.data);
  }

  return (
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
      <AddReplyForm
        commentId={props.comment.id}
        getAllReplies={getAllReplies}
      />
      <GetReplies replies={replies} />
    </div>
  );
};

export default CommentCard;
