const ReplyCard = (props) => {
    return ( 
        <div>
            <h2>TEST TEST TEST</h2>
            <h4>{props.reply.user.username}</h4>
            <p>{props.reply.text}</p>

        </div>
     );
}
 
export default ReplyCard;