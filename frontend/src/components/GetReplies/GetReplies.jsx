import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import ReplyCard from "../ReplyCard/ReplyCard";
import "./GetReplies.css"

const GetReplies = (props) => {
  const [user, token] = useAuth();
  const [repliesToggled, setRepliesToggled] = useState(false);
  const [replyButtonLabel, setReplyButtonLabel] = useState("Show Replies");
  const navigate = useNavigate();

  function buttonClick() {
    if (token !== null) {
      setRepliesToggled(!repliesToggled);
      replyButtonLabel === "Show Replies"
        ? setReplyButtonLabel("Hide Replies")
        : setReplyButtonLabel("Show Replies");
    } else {
      navigate("/login");
    }
  }

  return (
    <div>
      {props.replies && props.replies.length !== 0 && (
        
        <button className="show-replies-btn" onClick={buttonClick}>{replyButtonLabel}</button>
      )}

      {repliesToggled === true &&
        props.replies !== null &&
        props.replies.map((reply, index) => {
          return <ReplyCard key={index} reply={reply} />;
        })}
    </div>
  );
};

export default GetReplies;
