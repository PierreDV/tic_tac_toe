import { PLACE_PIECE } from '../actions/index';

export default function(state = 'x', action) {
  switch(action.type) {
  case PLACE_PIECE:
    if(action.turn === 'x') {
      return 'o';
    } else {
      return 'x';
    }
  };
  return state;
}