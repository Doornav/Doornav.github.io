import './TextElement.css'

function TextElement(props){
    return(
        <body className="text-box">
            <h1 className='title'>
                {props.title ? props.title : ""}
            </h1>
            <h2 className='subtitle'>
                {props.subtitle ? props.subtitle : ""}
            </h2>
            <div className='body-text'>
                {props.bodyText ? props.bodyText : ""}
            </div>
        </body>
    );
}

export default TextElement;