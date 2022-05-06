import React, { useState, useEffect } from "react";
import LikeDislike from "../LikeDislike/LikeDislike";
import GetReplies from "../GetReplies/GetReplies";
import AddReplyForm from "../AddReplyForm/AddReplyForm";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import "./CommentCard.css";

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
      .then((response) => {
        console.log(response.data);
        setReplies(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  let userProfile = props.comment.user.first_name.charAt(0).toUpperCase();

  return (
    <div className="comment__body">
      <div className="flex">
        <div className="profile-circle">{userProfile}</div>
        <h4 className="comment__usrname">{props.comment.user.username}</h4>
      </div>
      <p className="comment__text">{props.comment.text}</p>
      <div className="comment__footer">
        <LikeDislike
          comment={props.comment}
          getAllComments={props.getAllComments}
        />
        <AddReplyForm
          commentId={props.comment.id}
          getAllReplies={getAllReplies}
        />
      </div>

      <GetReplies replies={replies} />
    </div>
  );
};

export default CommentCard;
