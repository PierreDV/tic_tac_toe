import { combineReducers } from 'redux';
import Board from './board';
import PlayerTurn from './player_turn';
import Result from './result';

const rootReducer = combineReducers({
  board: Board,
  playerTurn: PlayerTurn,
  result: Result
});

export default rootReducer;