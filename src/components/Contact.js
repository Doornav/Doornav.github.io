import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [nameText, setNameText] = useState('');
  

  const handleNameChange = (event) => {
    setNameText(event.target.value);
  };

  const [emailText, setEmailText] = useState('');
  

  const handleEmailChange = (event) => {
    setEmailText(event.target.value);
  };

  const [inputText, setInputText] = useState('');
  

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const handleButtonClick = () => {
    // Update the displayedText with the current inputText
    console.log(nameText, emailText, inputText)
  };

  return (
    <div className='contact-container'>
      <div className='contact-title'>Contact</div>
      <input className='name-input'
        type="text"
        placeholder='Name'
        value={nameText}
        onChange={handleNameChange}
      />
      <input className='email-input'
        type="text"
        placeholder='E-mail'
        value={emailText}
        onChange={handleEmailChange}
      />
      <input className='input'
        type="text"
        placeholder='input'
        value={inputText}
        onChange={handleInputChange}
      />
      
      <button className='submit-button' onClick={handleButtonClick}>Update Text</button>
    </div>
  );
}

export default Contact;
