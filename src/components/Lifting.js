import '../styles/Lifting.css'
import TextElement from './TextElement';
import CompoundLift from './CompoundLift';

function Lifting(){
    const compoundLiftTypes = ['Squat', 'Bench', 'Deadlift']
    const listLifts = compoundLiftTypes.map((compoundLiftType, index) => (
  <CompoundLift
    key={compoundLiftType}
    type={compoundLiftType}
    style={{
      borderRadius: index === 0 ? '3vw 1vw 1vw 0' : 
      index === compoundLiftTypes.length - 1 ? '0 1vw 1vw 3vw' :   // Last: no top left radius
                    '0 1vw 1vw 0'  // Middle: no top left or bottom left radius
    }}
  />
));
    return(
        <div className='lifting-container'>
            <div>
            {listLifts}
            </div>
            <div>
               <TextElement
            title = 'Weightlifting 🏋🏽'
            bodyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Nisi lacus sed viverra tellus in hac habitasse. Nibh tellus molestie nunc non blandit massa enim. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus."
            /> 
            </div>
        </div>
    );
}

export default Lifting;