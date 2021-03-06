import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCard from "../CommentCard/CommentCard";
import AddComment from "../AddComment/AddComment";
import "./CommentSection.css";

const CommentSection = (props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getAllComments();
  }, [props.videoId]);

  async function getAllComments() {
    let response = await axios
      .get(`http://127.0.0.1:8000/api/comments/?video=${props.videoId}`)
      .catch((error) => {
        console.log(error.response);
      });
    setComments(response.data);
  }

  return (
    <div className="commentsection">
      <h3 className="cs__title">
        {comments.length} {comments.length === 1 ? "comment" : "comments"}
      </h3>
      <AddComment videoId={props.videoId} getAllComments={getAllComments} />
      {comments && comments.length !== 0 ? (
        <tbody>
          {comments.map((comment) => {
            return (
              <CommentCard
                key={comment.id}
                comment={comment}
                getAllComments={getAllComments}
              />
            );
          })}
        </tbody>
      ) : (
        <p>This video has no comments</p>
      )}
    </div>
  );
};

export default CommentSection;
