import './TextElement.css'

function TextElement({title, subtitle, bodyText}){
    return(
        <body className="text-box">
            <h1 className='title'>
                {title}
            </h1>
            <h2 className='subtitle'>
                {subtitle}
            </h2>
            <div className='body-text'>
                {bodyText}
            </div>
        </body>
    );
}

export default TextElement;