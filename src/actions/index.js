export function placePiece(position) {
  return {
    type: 'PLACE_PIECE',
    payload: position
  };
}