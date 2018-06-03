import { combineReducers } from 'redux';
import Board from './board';
import Turn from './turn';
import Result from './result';

const rootReducer = combineReducers({
  board: Board,
  turn: Turn,
  result: Result
});

export default rootReducer;