import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./AddComment.css"

const AddComment = (props) => {
  const [commentInput, setCommentInput] = useState("");
  const [user, token] = useAuth();
  const navigate = useNavigate();

  async function addComment() {
    await axios
      .post(
        `http://127.0.0.1:8000/api/comments/?video=${props.videoId}`,
        {
          text: commentInput,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .catch((error) => {
        console.log(error);
      });
    props.getAllComments();
    setCommentInput("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (user != null) {
      addComment();
    } else {
      navigate("/login");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="custom-input"
        type="text"
        placeholder="Add a comment..."
        onChange={(event) => setCommentInput(event.target.value)}
      />
    </form>
  );
};

export default AddComment;
