import React, { useState, useRef } from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [nameText, setNameText] = useState('');
  const [emailText, setEmailText] = useState('');
  const [inputText, setInputText] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const [namePlaceholder, setNamePlaceholder] = useState('Name');
  const [emailPlaceholder, setEmailPlaceholder] = useState('E-mail');
  const [inputPlaceholder, setInputPlaceholder] = useState('Compose Message');

  const handleNameChange = (event) => {
    setNameText(event.target.value);
    if (nameText === ''){
      setNamePlaceholder('Name');
    }
  };

  const handleEmailChange = (event) => {
    setEmailText(event.target.value);
    if (emailText === ''){
      setEmailPlaceholder('E-mail');
    }
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    if (inputText === ''){
      setInputPlaceholder('Compose a Message');
    }
  };

  const handleButtonClick = () => {
    if (inputText === '' || emailText === '' || nameText === '') {
      setNamePlaceholder('Please enter your name!');
      setEmailPlaceholder('Please enter your email!');
      setInputPlaceholder('Please enter a message!');
    } else {
      setNamePlaceholder('Name');
      setEmailPlaceholder('E-mail');
      setInputPlaceholder('Compose Message');
      console.log('inputText:', { inputText });
      console.log('emailText:', { emailText });
      console.log('nameText:', { nameText });
      
          emailjs.sendForm('service_a736mg8', 'template_ifuv9ei', form.current, {
              publicKey: 'Cj-kr5c1EdKbzoySt',
            })
            .then(
              () => {
                console.log('SUCCESS!');
                setMessageSent(true);
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
            );

          
    }
  };

  return (
    <>
      <div className='contact-container'>
        <div className='widget-container'>
          <div className='contact-title'>Contact</div>
          <div className='icon-container'>
            <img src="./images/email_icon.png" alt='image1' onClick={()=>window.location.href="https://mail.google.com/mail/?view=cm&fs=1&to=pranavpre@gmail.com&su=SUBJECT&body=BODY"}/>
            <img src="./images/ig_icon.png" alt='image2' onClick={() => window.location.href="https://www.instagram.com/pranav_sa23/"}/>
            <img src="./images/phone_icon.png" alt='image3' onClick={() => window.location.href=""}/>
            <img src="./images/sc_icon.png" alt='image4' onClick={() => window.location.href=""}/>
            <img src="./images/yt_icon.png" alt='image5' onClick={() => window.location.href="https://www.youtube.com/@doornav160"}/>
            <img src="./images/in_icon.png" alt='image5' onClick={() => window.location.href="https://www.linkedin.com/in/pranav-sathianathan-2621a8268/"}/>
          </div>
          <button className={`submit-button ${messageSent ? 'green' : ''}`} onClick={handleButtonClick}>
            Submit
          </button>
        </div>

        <div className='field-inputs'>
          <form ref={form}>
          <input
            className='name-input'
            type='text'
            name='user_name'
            placeholder={namePlaceholder}
            value={nameText}
            onChange={handleNameChange}
          />
          <input
            className='email-input'
            type='text'
            name='user_email'
            placeholder={emailPlaceholder}
            value={emailText}
            onChange={handleEmailChange}
          />
          <textarea
            className='input'
            rows={10}name='message'
            placeholder={inputPlaceholder}
            value={inputText}
            onChange={handleInputChange}
          />
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
