import { PLACE_MARKER } from '../actions/index';

export default function(state = 'x', action) {
  switch(action.type) {
  case PLACE_MARKER:
    if(action.playerTurn === 'x') {
      return 'o';
    } else {
      return 'x';
    }
  };
  return state;
}