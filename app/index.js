import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './js/redux/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

// react components
import { Note } from './components';

const App = (props) => (
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ Note }>
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.querySelector('#app'));
