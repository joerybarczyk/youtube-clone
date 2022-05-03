

const HomeVideoCard = (props) => {
    return ( 
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src={props.thumbnail} alt="Thumbnail URL"/>
        <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <h6 class ="card-text">{props.channelName}</h6>
        <p>{props.date}</p>
        
        </div>
</div>

     );
}
 
export default HomeVideoCard;