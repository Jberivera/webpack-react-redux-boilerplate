import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// reducer
import myApp from '../reducers/myApp.js';

// react components
import ShowNote from '../containers/ShowNote.js';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(myApp)}>
        <ShowNote />
      </Provider>
    )
  }
}
