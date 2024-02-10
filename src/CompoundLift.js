import './CompoundLift.css';
import { useState } from 'react';

function CompoundLift(props){
    const [active, setActive] = useState(false);
    return(
        <div className='lift-type-container'
        onClick={() => setActive((prevActive) => !prevActive)}
         style={{ width: active ? '20vw' : '5vw' }}>
            {props.type}
        </div>
    );
}

export default CompoundLift;