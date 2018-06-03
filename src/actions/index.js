export const PLACE_PIECE = 'PLACE_PIECE';

export function placePiece(position, turn) {
  return {
    type: PLACE_PIECE,
    position: position,
    turn: turn
  };
}