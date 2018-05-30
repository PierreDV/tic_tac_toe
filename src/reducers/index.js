import { combineReducers } from 'redux';
import Board from './board';

const rootReducer = combineReducers({
  board: Board
});

export default rootReducer;