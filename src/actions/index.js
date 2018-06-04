export const PLACE_PIECE = 'PLACE_PIECE';

export function placePiece(board, position, playerTurn) {
  return {
    type: PLACE_PIECE,
    board: board,
    position: position,
    playerTurn: playerTurn
  };
}