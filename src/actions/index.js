export const PLACE_MARKER = 'PLACE_MARKER';

export function placeMarker(playerTurn, position) {
  return {
    type: PLACE_MARKER,
    playerTurn: playerTurn,
    position: position
  };
}