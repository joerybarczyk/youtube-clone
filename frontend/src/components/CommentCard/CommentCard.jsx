import React from "react";
import { Card } from "react-bootstrap";


const CommentCard = (props) => {
    return ( 
        <Card>
            <Card.Body>
                <Card.Title>UserName</Card.Title>
                <Card.Text>ThIS IS A COMMENT</Card.Text>
            </Card.Body>
        </Card>
     );
}
 
export default CommentCard;