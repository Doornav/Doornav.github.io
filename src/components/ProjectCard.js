import "../styles/ProjectCard.css"

function ProjectCard(props){
    return(
        <div className="box">
            <h1>{props.title}</h1>
            {props.subtitle && (
                <div className="sub">
                    {props.subtitle}
                </div>
            )}
            {props.video && (
                <div>
                    <iframe 
                        className='video' 
                        src={`https://www.youtube.com/embed/${props.video}`} 
                        title='Video' 
                        allowFullScreen>
                    </iframe>
                </div>
            )}
            
        </div>
    );
}

export default ProjectCard;