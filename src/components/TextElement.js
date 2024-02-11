import '../styles/TextElement.css'

function TextElement(props){
    const containerStyle = {
        margin: props.centerText === '0px' ? '0px' : '10%',
      };
    return(
        <div className="text-box" style={containerStyle}>
            <h1 className='title'>
                {props.title ? props.title : ""}
            </h1>
            <h2 className='subtitle'>
                {props.subtitle ? props.subtitle : ""}
            </h2>
            <div className='body-text'>
                {props.bodyText ? props.bodyText : ""}
            </div>
        </div>
    );
}

export default TextElement;