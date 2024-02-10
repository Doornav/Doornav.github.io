import './CompoundLift.css';

function CompoundLift(props){

    return(
        <div className='lift-type-container'>
            {props.type}
        </div>
    );
}

export default CompoundLift;