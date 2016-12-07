import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../../reducers';

const middlewares = [
  thunk
];

function configureStore(preloadedState = {}) {
  // only inlcude logger in development
  if (process.env.NODE_ENV === 'development') {
    const createLogger = require('redux-logger');
    const logger = createLogger();
    middlewares.push(logger);
  }

  const store = createStore(
    reducers,
    preloadedState,
    applyMiddleware(...middlewares)
  );

  return store;
}

export default configureStore;
