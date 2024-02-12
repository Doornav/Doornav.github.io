import React, { useState } from 'react';
import '../styles/Lifting.css';
import TextElement from './TextElement';
import CompoundLift from './CompoundLift';

function Lifting() {
    const compoundLiftTypes = ['Squat', 'Bench', 'Deadlift'];
    const [liftActive, setLiftActive] = useState(false);

    const handleLiftToggle = (isActive) => {
        setLiftActive(isActive);
    };

    const listLifts = compoundLiftTypes.map((compoundLiftType, index) => (
        <CompoundLift
            key={compoundLiftType}
            type={compoundLiftType}
            style={{
                borderRadius: index === 0 ? '3vw 1vw 1vw 0' :
                    index === compoundLiftTypes.length - 1 ? '0 1vw 1vw 3vw' :
                        '0 1vw 1vw 0'
            }}
            onToggle={handleLiftToggle}
        />
    ));

    return (
        <div className='lifting-container'>
            <div>
                {listLifts}
            </div>
            <div className={`text-element-container${liftActive ? 'hidden' : ''}`}>
                <TextElement
                    title='Weightlifting 🏋🏽'
                    bodyText="I started working out in 2023, and so far I've made some great progress. However, I still have a long way to go if I ever want to compete in powerlifting. There have been up and downs. Nonetheless, we stay persistent! Here, I'll keep my record of the Big Three Lifts. I'll also show what I lifted when I first started:)."
                />
            </div>
        </div>
    );
}

export default Lifting;
