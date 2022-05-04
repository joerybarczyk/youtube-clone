import React from 'react';
import GetComments from '../GetComments/GetComments';
const CommentSection = (props) => {

    
    return ( 
       <GetComments videoId ={props.videoId}/>
     );
}
 
export default CommentSection;