export const PLACE_PIECE = 'PLACE_PIECE';
export const CHECK_RESULT = 'CHECK_RESULT';

export function placePiece(position, playerTurn) {
  return {
    type: PLACE_PIECE,
    position: position,
    playerTurn: playerTurn
  };
}

export function checkResult(board) {
  return {
    type: CHECK_RESULT,
    payload: board
  }
}