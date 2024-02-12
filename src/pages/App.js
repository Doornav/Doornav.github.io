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

  
  
  document.body.style.backgroundColor = scrollPosition >= 1800 ? '#212121' : '#C8C8C8';
  document.body.style.transition = 'background-color 0.5s ease-in-out';

  
  document.body.style.color = scrollPosition >= 1800 ? 'white' : 'black';


  const centerText = {
    margin: '0px',
  }
 
  return (
    <>
      <Navbar/>
      <div className='flex-container' style={{ marginTop: '10%' }} id='about'>
        <ImageContainer imgLink = "./images/profile_icon.jpg" 
        content = "Photo taken at the Park Butte (heh) Lookout, right next to Mount Baker in Washington State"/>
        <TextElement
          title="Pranav Sathianathan"
          subtitle="Undergraduate Student"
          bodyText="Hey! My name is Pranav Preethan Sathianathan and I am 19 years old. I live in the Greater Seattle Area, but I go to university in Santa Cruz, California. Some of my hobbies are lifting 🏋️, basketball 🏀, video games 🎮, hiking 🥾, and mountain biking 🚵‍♂️."
        />
      </div>
      <div className='flex-container' id='experience'>
        <TextElement
          title="B.S Computer Science Undergraduate 🧑🏾‍🎓"
          subtitle ="UC Santa Cruz"
          bodyText="Currently I am a first year at University of California, Santa Cruz. I am currently affiliated with Stevenson College. Relavent Course work I have completed so far includes :CSE 20: CSE 30: CSE 12: CSE 13: CSE 16"
        />
        <ImageContainer imgLink = "./images/UCSC_icon.png"
        content ="Banana Slugs Spotted: 7"/>
      </div>
      <TextElement
        title = "Experiences & Projects 🛠️"
        bodyText ="I can confidently say that I started coding in my freshman year of high school. Since then I have completed various projects and learned many skills. I have many ideas that I still want to create. For now, I have listed my projects and skills below."
      />
      <div className='flex-container'>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        
      </div>
      <div className='skills-flex-container'>
        <TextElement
        title = 'Skills' 
        />
        <Skills/>
      </div>
      <div id='lifting'>
        <Lifting></Lifting>
      </div>
      
      <div className='flex-container' id ='contact'>
        <Contact/>
      </div>
      
    </>
  );
}

export default App;
