import React, { useState } from 'react';
import '../styles/Lifting.css';
import TextElement from './TextElement';


function Lifting() {

    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    const titleName = ['weightlifting', 'squat', 'bench', 'deadlift']
    const content = ["I started working out in 2023, and so far I've made some great progress. However, I still have a long way to go if I ever want to compete in powerlifting. There have been up and downs. Nonetheless, we stay persistent! Here, I'll keep my record of the Big Three Lifts. I'll also show what I lifted when I first started:)."
                    , 'here is where ill put my squat info'
                    , 'here is where ill put my bench info'
                    , 'here is where ill put my deadlift info']
    const video = [ '' ,'TBbQePjURyk'
                    , 'eJurfWUbsBI'
                    ,'S7fKFg-vS1o']

    return (
        
        <div className='lifting-container'>
            <div className='tab-container'>
                <div className={toggleState === 0 ? 'active-tab' : 'tab'}
                onClick={() => toggleTab(0)}
                style={{borderRadius: '3vw 0 0 0'}}>Lifting</div>

                <div className={toggleState === 1 ? 'active-tab' : 'tab'}
                onClick={() => toggleTab(1)}
                style={{borderRadius: '0 0 0 0'}}>Squat</div>

                <div className={toggleState === 2 ? 'active-tab' : 'tab'}
                onClick={() => toggleTab(2)}
                style={{borderRadius: '0 0 0 0'}}>Bench</div>

                <div className={toggleState === 3 ? 'active-tab' : 'tab'}
                onClick={() => toggleTab(3)}
                style={{borderRadius: '0 3vw 0 0'}}>Deadlift</div>

                    </div>
            
            <TextElement
                title={titleName[toggleState]}
                bodyText={content[toggleState]}
                video={video[toggleState]}
            />
        </div>
    );
}

export default Lifting;
