import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import createLogger from 'redux-logger';

// reducers
import reducers from './reducers';

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routerReducer
}));

const store = createStore(
  reducer,
  applyMiddleware(
    thunk,
    createLogger()
  )
);

const history = syncHistoryWithStore(browserHistory, store);

// react components
import { Note } from './components';

const App = (props) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Note}>
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.querySelector('#app'));
