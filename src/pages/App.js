import Navbar from '../components/Navbar';
import ImageContainer from '../components/ImageContainer';
import TextElement from '../components/TextElement';
import ProjectCard from '../components/ProjectCard';
import React, { useEffect, useState } from 'react';
import Skills from '../components/Skills';
import Lifting from '../components/Lifting';
import Contact from '../components/Contact';


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

  
  
  document.body.style.backgroundColor = scrollPosition >= 1800 ? '#212121' : 'white';
  document.body.style.transition = 'background-color 0.5s ease-in-out';

  
  document.body.style.color = scrollPosition >= 1800 ? 'white' : 'black';


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
      <div className='flex-container'>
        <Contact/>
      </div>
      
    </>
  );
}

export default App;
