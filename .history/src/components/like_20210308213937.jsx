const Like = (props) => {
    const clsIcon = props.liked ? "fa fa-heart" :"fa fa-heart-o";
    return ( 
        <i className={clsIcon} style={{color:'red'}} onClick={props.onClick}></i>
     );
}

export default Like;