import '../styles/TextElement.css';
import React from 'react';

function TextElement(props) {


  return (
    <div className="text-box">
      <h1 className='title'>{props.title ? props.title : ''}</h1>
      <h2 className='subtitle'>{props.subtitle ? props.subtitle : ''}</h2>
      <div className='body-text'>{props.bodyText ? props.bodyText : ''}</div>
      
    </div>
  );
}

export default TextElement;
