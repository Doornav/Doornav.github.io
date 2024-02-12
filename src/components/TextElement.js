import '../styles/TextElement.css';
import React from 'react';
import { Container } from 'react-dom';

function TextElement(props) {


  return (
    <div className="text-box">
      <h1 className='title'>{props.title ? props.title : ''}</h1>
      <h2 className='subtitle'>{props.subtitle ? props.subtitle : ''}</h2>
      <div className='body-text'>{props.bodyText ? props.bodyText : ''}</div>
      {props.video && <iframe className='video' src={`https://www.youtube.com/embed/${props.video}`} title = 'Video' allow allowFullScreen></iframe>}
        
    </div>
  );
}

export default TextElement;
