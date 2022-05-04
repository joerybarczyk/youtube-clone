import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCard from "../CommentCard/CommentCard";
import AddComment from "../AddComment/AddComment"

const CommentSection = (props) => {
  const [comments, setComments] = useState(null);

  console.log(`Comment section (v=${props.videoId}) started`);
  console.log("comments state variable" + JSON.stringify(comments));

  useEffect(() => {
    console.log("Comment section useEffect started");
    async function getAllComments() {
      console.log("Fetching comment data...");

      let response = await axios
        .get(`http://127.0.0.1:8000/api/comments/?video=${props.videoId}`)
        .catch((error) => {
          console.log(error.response);
        });

      console.log("Comment data fetched! Setting comment state.");
      setComments(response.data);
    }
    getAllComments();
  }, [props.videoId]);

  return (
    <div>
      <AddComment videoId={props.videoId}/>
      <h3>Comments</h3>
      {comments && comments.length !== 0 ? (
        <tbody>
          {comments.map((comment, index) => {
            return <CommentCard key={index} comment={comment} />;
          })}
        </tbody>
      ) : (
        <p>This video has no comments</p>
      )}
    </div>
  );
};

export default CommentSection;
