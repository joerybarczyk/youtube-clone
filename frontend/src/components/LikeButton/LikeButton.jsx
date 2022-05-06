import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { BsHandThumbsUp, BsHandThumbsUpFill } from "react-icons/bs";
import "./LikeButton.css";

function LikeButton(props) {
  const [liked, setLiked] = useState(false);
  const [user, token] = useAuth();

  async function likeComment() {
    if (liked === false) {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/comments/${props.comment.id}/`,
        {
          likes: props.comment.likes + 1,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      props.getAllComments();
      setLiked(true);
    } else {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/comments/${props.comment.id}/`,
        {
          likes: props.comment.likes - 1,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      props.getAllComments();
      setLiked(false);
    }
  }

  return (
    <>
      <div onClick={likeComment}>
        {liked ? (
          <BsHandThumbsUpFill className="lb__icon" />
        ) : (
          <BsHandThumbsUp className="lb__icon" />
        )}
      </div>
      <p className="lb__text">{props.comment.likes}</p>
    </>
  );
}

export default LikeButton;
