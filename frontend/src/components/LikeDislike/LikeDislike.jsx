import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import {
  BsHandThumbsDown,
  BsHandThumbsDownFill,
  BsHandThumbsUp,
  BsHandThumbsUpFill,
} from "react-icons/bs";
import "./LikeDislike.css";

function LikeDislike(props) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [user, token] = useAuth();

  async function updateComment(type) {
    let request;
    switch (type) {
      case "like":
        request = {
          likes: props.comment.likes + 1,
        };
        break;
      case "unlike":
        request = {
          likes: props.comment.likes - 1,
        };
        break;
      case "dislike":
        request = {
          dislikes: props.comment.dislikes + 1,
        };
        break;
      case "undislike":
        request = {
          dislikes: props.comment.dislikes - 1,
        };
        break;
      case "like-to-dislike":
        request = {
          likes: props.comment.likes - 1,
          dislikes: props.comment.dislikes + 1,
        };
        break;
      case "dislike-to-like":
        request = {
          likes: props.comment.likes + 1,
          dislikes: props.comment.dislikes - 1,
        };
        break;
      default:
        console.log(`${type} is not a valid argument.`);
    }

    await axios.put(
      `http://127.0.0.1:8000/api/comments/${props.comment.id}/`,
      request,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    props.getAllComments();
  }

  function likeComment() {
    if (liked) {
      setLiked(false);
      updateComment("unlike");
    } else if (disliked) {
      setDisliked(false);
      setLiked(true);
      updateComment("dislike-to-like");
    } else {
      setLiked(true);
      updateComment("like");
    }
  }

  function dislikeComment() {
    if (disliked) {
      setDisliked(false);
      updateComment("undislike");
    } else if (liked) {
      setLiked(false);
      setDisliked(true);
      updateComment("like-to-dislike");
    } else {
      setDisliked(true);
      updateComment("dislike");
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

export default LikeDislike;
