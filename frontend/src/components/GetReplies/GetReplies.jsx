import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import ReplyCard from "../ReplyCard/ReplyCard";




const GetReplies = (props) => {

    const [user, token] = useAuth();
    const [repliesToggled, setRepliesToggled] = useState(false);
    const [replies, setReplies] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        getAllReplies();
    },[])

    async function getAllReplies(){
        let response = await axios.get(`http://127.0.0.1:8000/api/replies/?commentId=${props.commentId}`,{
            headers: {
                Authorization: "Bearer " + token,
            }
        })
        .catch((error) =>{
            console.log(error.response)
        }

        )
        setReplies(response.data)
        console.log(response.data)
    }

    function buttonClick(){
        if(token !== null){
            setRepliesToggled(true)
            
        }else{
            navigate("/login");
        }
    }



    return ( 
        <div>
            {replies && replies.length !== 0 &&
            <button onClick={buttonClick}>View Replies</button>
            }
            
            {repliesToggled === true && replies !== null &&
                replies.map((reply, index) => {
                   return <ReplyCard key={index} reply={reply}/>

                }

                )
            
            }


        </div>
     );
}
 
export default GetReplies;