import './Lifting.css'
import TextElement from './TextElement';
import CompoundLift from './CompoundLift';

function Lifting(){
    const compoundLiftTypes = ['Squat', 'Bench', 'Deadlift']
    const listLifts = compoundLiftTypes.map(compoundLiftType => (
        <CompoundLift key={compoundLiftType} type={compoundLiftType} />
      ));
    return(
        <div className='lifting-container'>
            <div>
            {listLifts}
            </div>
            <div>
               <TextElement
            title = 'Weightlifting'
            bodyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Nisi lacus sed viverra tellus in hac habitasse. Nibh tellus molestie nunc non blandit massa enim. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus."
            /> 
            </div>
        </div>
    );
}

export default Lifting;