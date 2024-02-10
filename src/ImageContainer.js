import { useState } from 'react';
import './ImageContainer.css'

function ImageContainer(){
    const [active, setActive] = useState(false);
    return(
        <div className='imageContainer'
         onClick={() => setActive((prevActive) => !prevActive)}
         style={{ width: active ? '70vw' : 'min(50vw, 50vh)' }}>
            Insert Image Here
        </div>
    );
}

export default ImageContainer;


