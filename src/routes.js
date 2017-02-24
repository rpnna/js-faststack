import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Hello from './components/Hello/Hello';
import About from './components/About/About';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Hello} />
    <Route path='/about' component={About} />
  </Route>
);
