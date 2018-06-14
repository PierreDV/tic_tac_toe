import { PLACE_MARKER } from '../actions';
const STARTING_RESULT = "game in progress";

export default function(state = STARTING_RESULT, action) {
  switch(action.type) {
  case PLACE_MARKER:
    return state;
  }
  return state;
}