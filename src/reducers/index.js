import { combineReducers } from 'redux';
import Board from './board';
import Turn from './turn';

const rootReducer = combineReducers({
  board: Board,
  turn: Turn
});

export default rootReducer;