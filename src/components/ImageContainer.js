import React, { useState } from 'react';
import '../styles/ImageContainer.css';

function ImageContainer(props) {
  const [active, setActive] = useState(false);

  return (
    <div className='image-and-click'>

    <div
      className='imageContainer'
      onClick={() => setActive((prevActive) => !prevActive)}
      style={{
        width: active ? 'min(90vw,90vh)' : 'min(50vw, 50vh)', 
      }}
    >  
    <div style={{ marginLeft: '60%', display: active ? "": "none"}}>
        {props.content}
    </div>
        
      
      <img src={props.imgLink} alt='logo'/>
      
    </div>
    <div>click me</div>
    </div>
  );
}

export default ImageContainer;
