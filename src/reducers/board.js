import { PLACE_PIECE } from "../actions";

const STARTING_POSITION = [
  '','','',
  '','','',
  '','',''
]

export default function(state = STARTING_POSITION, action) {
  switch(action.type) {
  case PLACE_PIECE:  
    return state.map((x, i) => {
      if(i === action.position){
        return action.turn;
      } else {
        return x;
      }
    });
  }
  return state;
}