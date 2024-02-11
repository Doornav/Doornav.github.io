import React, { useState } from 'react';
import '../styles/ImageContainer.css';

function ImageContainer() {
  const [active, setActive] = useState(false);

  return (
    <div
      className='imageContainer'
      onClick={() => setActive((prevActive) => !prevActive)}
      style={{
        width: active ? 'min(70vw,70vh)' : 'min(50vw, 50vh)', 
      }}
    >
      Insert Image Here
    </div>
  );
}

export default ImageContainer;
