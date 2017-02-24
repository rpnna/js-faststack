import React, { PropTypes } from 'react';
import { Route } from 'react-router-dom';
import Hello from '../components/Hello/Hello';
import About from '../components/About/About';

// Container Styles
import './App.scss';

const App = () => (

  <div className='app'>
    <Route exact path='/' component={Hello} />
    <Route path='/about' component={About} />
  </div>

);

App.propTypes = {
  children: PropTypes.object
};

export default App;
