import "./ReplyCard.css"

const ReplyCard = (props) => {
    return ( 
        <div className="custom-reply">
            
            <h5 className="custon-username">{props.reply.user.username}</h5>
            <p className="custom-text">{props.reply.text}</p>

        </div>
     );
}
 
export default ReplyCard;