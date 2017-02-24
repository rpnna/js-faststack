import React from 'react';
import { Link } from 'react-router-dom';

// Component Styles
import './About.scss';

const About = () => (

  <div className='about'>
    <h4 className='aboutTitle'>About</h4>
    <p>Hey..you are viewing this page because of react-router!</p>
    <i className='emoji'>👏🏼 🚀</i>
    <Link to='/' className='aboutLink'>Return to Home</Link>
  </div>

);

export default About;
