import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

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
      <button onClick={likeComment}>Like</button>
      <p>{props.comment.likes}</p>
    </>
  );
}

export default LikeButton;
