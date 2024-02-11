import '../styles/CompoundLift.css';
import { useState } from 'react';

function CompoundLift(props){
    const [active, setActive] = useState(false);
    return(
        <div className='lift-type-container'
        onClick={() => setActive((prevActive) => !prevActive)}
         style={{ width: active ? '20vw' : '5vw' ,
         borderRadius: props.style?.borderRadius || '3vw 2vw 2vw 3vw',
        }} // Apply the received border radius from parent
         >
            {props.type}
        </div>
    );
}

export default CompoundLift;