import { combineReducers } from 'redux-immutable';

// Reducers
import { gridsReducer } from './grid/grid.js';


const app = combineReducers({
  grid: gridsReducer
});

export default app;
