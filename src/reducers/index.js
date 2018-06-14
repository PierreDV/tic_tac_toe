import { combineReducers } from 'redux';
import Board from './board';
import PlayerTurn from './player_turn';
import Result from './result';

export default combineReducers({
  board: Board,
  playerTurn: PlayerTurn,
  result: Result
})