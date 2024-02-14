import React from 'react';
import '../styles/Navbar.css'
import Hamburger from './Hamburger';
import { useState } from 'react';

function Navbar() {
  const [navbarHeight, setNavbarHeight] = useState(60); // Set your initial navbar height here

  function toggleNavbarHeight() {
    // Update the navbar height based on the current state
    setNavbarHeight((prevHeight) => (prevHeight === 60 ? 120 : 60));
  }

  function scrollToDiv(targetId) {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = -100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;

      // Use the window.scrollTo inside a requestAnimationFrame
      // to ensure it's triggered in the next frame, allowing for smooth scrolling
      requestAnimationFrame(() => {
        window.scrollTo({ top: elementPosition + offset, behavior: 'smooth' });
      });
    }
  }

  return (
    <nav className={navbarHeight === 60 ? 'nav' : 'ham-nav'}>
      <h1 className='nav-title'>Pranav S.</h1>
      <ul>
        <li className={navbarHeight === 60 ? 'full-length' : 'ham'}>
          <a href="#about" onClick={() => scrollToDiv('about')}>
            About
          </a>
        </li>
        <li className={navbarHeight === 60 ? 'full-length' : 'ham'}>
          <a href="#experience" onClick={() => scrollToDiv('experience')}>
            Experience
          </a>
        </li>
        <li className={navbarHeight === 60 ? 'full-length' : 'ham'}>
          <a href="#lifting" onClick={() => scrollToDiv('lifting')}>
            Lifting
          </a>
        </li>
        <li className={navbarHeight === 60 ? 'full-length' : 'ham'}>
          <a href="#contact" onClick={() => scrollToDiv('contact')}>
            Contact
          </a>
        </li>
        <li>
        <Hamburger onClick={toggleNavbarHeight} style="display-ham"/>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
