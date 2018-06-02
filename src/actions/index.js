export const PLACE_PIECE = 'PLACE_PIECE';

export function placePiece(position) {
  return {
    type: PLACE_PIECE,
    payload: position
  };
}