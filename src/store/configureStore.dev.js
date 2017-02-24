import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const logger = createLogger();

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, composeWithDevTools(
    // Middleware you want to use in development
    applyMiddleware(logger),
  ));

  if (module.hot) {
    module.hot.accept('../reducers', () =>
    store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
}
