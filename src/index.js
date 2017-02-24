import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    // eslint-disable-next-line no-undef
    document.getElementById('root')
  );
};

render(Root);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    render(Root);
  });
}
