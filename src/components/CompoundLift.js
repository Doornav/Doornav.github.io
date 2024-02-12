import '../styles/CompoundLift.css';
import { useState } from 'react';

function CompoundLift(props) {
    const [active, setActive] = useState(false);

    const handleToggle = () => {
        setActive((prevActive) => !prevActive);

        // Notify parent component about the active state change
        if (props.onToggle) {
            props.onToggle(!active);
        }
    };

    return (
        <div
            className='lift-type-container'
            onClick={handleToggle}
            style={{
                width: active ? '1000%' : '5vw',
                borderRadius: props.style?.borderRadius || '3vw 2vw 2vw 3vw',
            }}
        >
            {props.type}
        </div>
    );
}

export default CompoundLift;
