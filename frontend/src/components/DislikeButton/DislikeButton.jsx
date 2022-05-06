import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { BsHandThumbsDown, BsHandThumbsDownFill } from "react-icons/bs";
import "./DislikeButton.css";

function DislikeButton(props) {
  const [disliked, setDisliked] = useState(false);
  const [user, token] = useAuth();

  async function dislikeComment() {
    if (disliked === false) {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/comments/${props.comment.id}/`,
        {
          dislikes: props.comment.dislikes + 1,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      props.getAllComments();
      setDisliked(true);
    } else {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/comments/${props.comment.id}/`,
        {
          dislikes: props.comment.dislikes - 1,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      props.getAllComments();
      setDisliked(false);
    }
  }

  return (
    <>
      <div onClick={dislikeComment}>
        {disliked ? (
          <BsHandThumbsDownFill className="db__icon" />
        ) : (
          <BsHandThumbsDown className="db__icon" />
        )}
      </div>
      <p className="db__text">{props.comment.dislikes}</p>
    </>
  );
}

export default DislikeButton;
