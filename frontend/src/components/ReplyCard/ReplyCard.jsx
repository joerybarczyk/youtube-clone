import "./ReplyCard.css"

const ReplyCard = (props) => {
    let userProfile = props.reply.user.first_name.charAt(0).toUpperCase();
    return ( 
        <div className="custom-reply">
            <div className="flex">
            <div className="profile-circle">{userProfile}</div>
            <h5 className="custon-username">{props.reply.user.username}</h5>
            </div>
            
            
            <p className="custom-text">{props.reply.text}</p>

        </div>
     );
}
 
export default ReplyCard;