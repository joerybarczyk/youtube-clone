import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddReplyForm.css";

function AddReplyForm(props) {
  const [buttonToggled, setButtonToggled] = useState(false);
  const [replyInput, setReplyInput] = useState("");
  const navigate = useNavigate();
  const [user, token] = useAuth();

  async function addReply() {
    await axios
      .post(
        `http://127.0.0.1:8000/api/replies/?commentId=${props.commentId}`,
        {
          text: replyInput,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => props.getAllReplies());
  }

  function handleClick() {
    if (user) {
      setButtonToggled(!buttonToggled);
    } else {
      navigate("/login");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    addReply();
    // props.getAllReplies();
  }

  return (
    <>
      <button className="replybtn" onClick={handleClick}>
        REPLY
      </button>
      {buttonToggled && (
        <form onSubmit={handleSubmit}>
          <input
            className="custom-input"
            type="text"
            placeholder="Add a reply"
            onChange={(e) => setReplyInput(e.target.value)}
          />
          <button className="post-reply-btn" type="submit">
            Reply
          </button>
        </form>
      )}
    </>
  );
}

export default AddReplyForm;
