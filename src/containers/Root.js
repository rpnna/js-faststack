import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';

// BrowserRouter: basename prop is required in order to run the demo gh-page

const Root = ({ store }) => (
  <Provider store={store}>
    <Router basename='/js-faststack'>
      <Route component={App} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
