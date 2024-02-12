import React, { useState } from 'react';
import '../styles/ImageContainer.css';

function ImageContainer(props) {
  const [active, setActive] = useState(false);

  return (
    <div
      className='imageContainer'
      onClick={() => setActive((prevActive) => !prevActive)}
      style={{
        width: active ? 'min(90vw,90vh)' : 'min(50vw, 50vh)', 
      }}
    >  
    <div style={{display: active ? '': 'none'}}>
        <ul>
            <li>item1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
        </ul>
    </div>
        
      
      <img src={props.imgLink} alt='logo'/>
    </div>
  );
}

export default ImageContainer;
