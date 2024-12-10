// (1) Using props in function parameter:
function Image(props) {
    return (
        <div>
            <img src={props.src} width={props.width} alt={props.alt} />
        </div>
    )
};

function ImageCard(props) {
    return (
        <div className="img-card">
            <h3>{props.txt}</h3>
            <Image src={props.img} width={props.width} alt={props.alt} />
        </div>
    );
}

export default ImageCard;
