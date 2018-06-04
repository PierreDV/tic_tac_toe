import { PLACE_PIECE } from '../actions';

const STARTING_RESULT = "game in progress";

export default function(state = STARTING_RESULT, action) {
  switch(action.type) {
  case PLACE_PIECE:
    // get position of all markers for player whos turn it is.
    let playerMarkers = action.board.filter(square => square.marker === action.playerTurn);
    if (playerMarkers.length < 2) {
      return state;
    }
    // If player has less than 3 markers on board, game still undecided.
    let lastMove = action.board[action.position]
    // use position of move that was just made and filter out squares irrelevant to calculate result.
  }
  return state;
}