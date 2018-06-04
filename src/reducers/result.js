import { PLACE_PIECE } from '../actions';

const STARTING_RESULT = "game in progress";

export default function(state = STARTING_RESULT, action) {
  switch(action.type) {
  case PLACE_PIECE:
    console.log(state, action);
    return state;
  }
  return state;
}