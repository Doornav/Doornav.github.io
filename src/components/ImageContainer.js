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
        margin: active ?  '2% 0 2% 16%': '2%', // Set a fixed margin on both sides
      }}
    >
      Insert Image Here
    </div>
  );
}

export default ImageContainer;
