import React from 'react';
import '../styles/Navbar.css'

function Navbar() {
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
    <nav className="nav">
      <h1>Pranav S.</h1>
      <ul>
        <li>
          <a href="#about" onClick={() => scrollToDiv('about')}>
            About
          </a>
        </li>
        <li>
          <a href="#experience" onClick={() => scrollToDiv('experience')}>
            Experience
          </a>
        </li>
        <li>
          <a href="#lifting" onClick={() => scrollToDiv('lifting')}>
            Lifting
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => scrollToDiv('contact')}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
