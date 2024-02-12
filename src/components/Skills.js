import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const skills = ['java', 'python', 'javascript','typescript', 'git', 'html', 'css', 'react', 'firebase', 'rest'];
  const icons = ['java_icon.png', 'python_icon.png', 'javascript_icon.png','typescript.png', 'git_icon.png', 'html_icon.webp', 'css_icon.png', 'react_icon.png', 'firebase_icon.webp', 'api_icon.webp'];

  return (
    <div className='skills-container'>
        <div className='skill'>
            {skills.map((skill, index) => (
                <div key={index} className='skill-name'>
                <img src={'./images/' + icons[index]} alt={`${skill} icon`} className='skill-icon' />
                <span className='skill-text'>{skill}</span>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Skills;
