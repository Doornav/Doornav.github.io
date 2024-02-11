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
    <>
    <div className='contact-container'>
        <div className='widget-container'>
            <div className='contact-title'>Contact</div>
            <div className='icon-container'>
                <img src="./images/email_icon.png" alt='image1' />
                <img src="./images/ig_icon.png" alt='image2' />
                <img src="./images/phone_icon.png" alt='image3' />
                <img src="./images/sc_icon.png" alt='image4' />
                <img src="./images/yt_icon.png" alt='image5' />
                <img src="./images/in_icon.png" alt='image5' />
                
            </div>
            <button className='submit-button' onClick={handleButtonClick}>Update Text</button>
        </div>
        

        <div className='field-inputs'>
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
        </div>
    </div>
    </>
  );
}

export default Contact;
