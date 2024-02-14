import '../styles/Hamburger.css';
import { useState } from 'react';

function Hamburger(props) {
  const [active, setActive] = useState(false);

  const handleButtonClick = () => {
    setActive(!active);
    // Call the function passed as a prop from the Navbar component
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <div className={active ? 'patty' : 'hamburger'} onClick={handleButtonClick}>
      <div className={active ? 'non-active' : 'bar'}></div>
      <div className='bar'></div>
      <div className={active ? 'non-active' : 'bar'}></div>
    </div>
  );
}

export default Hamburger;
