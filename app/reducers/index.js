import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import myApp from './myApp';

const reducers = combineReducers({
  myApp,
  routing: routerReducer
});

export default reducers;
