import Navbar from './Navbar';
import ImageContainer from './ImageContainer';
import TextElement from './TextElement';
import ProjectCard from './ProjectCard';
import React, { useEffect, useState } from 'react';

function App() {

  return (
    <body>
      <Navbar />
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
    </body>
  );
}

export default App;
