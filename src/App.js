import Navbar from './Navbar';
import ImageContainer from './ImageContainer';
import TextElement from './TextElement';
import ProjectCard from './ProjectCard';
import React, { useEffect, useState } from 'react';
import Skills from './Skills';
import Lifting from './Lifting';


function App() {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Update the scroll position
      setScrollPosition(window.scrollY);
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  
  
  document.body.style.backgroundColor = scrollPosition >= 1800 ? 'darkgray' : 'white';
  document.body.style.transition = 'background-color 0.3s ease-in-out';

  
  document.body.style.color = scrollPosition >= 1800 ? 'white' : 'black';
  document.body.style.transition = 'color 0.3s ease-in-out';

  const centerText = {
    margin: '0px',
  }
 
  return (
    <>
      <Navbar/>
      <div className='flex-container'>
        <ImageContainer />
        <TextElement
          title="Pranav Sathianathan"
          subtitle="Undergraduate Student"
          bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
      <div className='flex-container'>
        <TextElement
          title="B.S Computer Science Undergraduate"
          bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ImageContainer/>
      </div>
      <TextElement
        title = "Experiences & Projects"
        bodyText ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Nisi lacus sed viverra tellus in hac habitasse. Nibh tellus molestie nunc non blandit massa enim. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Quisque non tellus orci ac auctor augue mauris augue neque. Commodo sed egestas egestas fringilla phasellus. Cursus turpis massa tincidunt dui ut. Cras adipiscing enim eu turpis egestas. Eget velit aliquet sagittis id consectetur purus ut faucibus. Ornare arcu dui vivamus arcu felis bibendum."
      />
      <div className='flex-container'>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        
      </div>
      <div className='skills-flex-container'>
        <TextElement
        title = 'Skills' 
        style = {centerText} 
        />
        <Skills/>
      </div>
      <Lifting></Lifting>
    </>
  );
}

export default App;
