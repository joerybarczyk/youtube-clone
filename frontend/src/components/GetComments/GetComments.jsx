import React, { useState, useEffect } from 'react';
import CommentCard from '../CommentCard/CommentCard';
import axios from "axios";


const GetComments = (props) => {
    const [comments, setComments] = useState(null);

    useEffect(() => {
        async function getAllComments() {
          let response = await axios.get(
            `http://127.0.0.1:8000/api/comments/?video=${props.videoId}`
            
          );
          
          setComments(response.data);
        }
        getAllComments();
      },[]);


    return ( 
    <div>
      {comments != null && (
        <tbody>
          {comments.map((comment, index) => {
            return (
              
              <CommentCard key={index} comment = {comment}/>
              
            );
          })}
        </tbody>
      )}
    
    </div> 
    );
}
 
export default GetComments;