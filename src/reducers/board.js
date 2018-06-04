import { PLACE_PIECE } from '../actions';

const STARTING_POSITION = [
  {position: 0, marker: null, magicInt: 8},
  {position: 1, marker: null, magicInt: 1},
  {position: 2, marker: null, magicInt: 6},
  {position: 3, marker: null, magicInt: 3},
  {position: 4, marker: null, magicInt: 5},
  {position: 5, marker: null, magicInt: 7},
  {position: 6, marker: null, magicInt: 4},
  {position: 7, marker: null, magicInt: 9},
  {position: 8, marker: null, magicInt: 2}
]

export default function(state = STARTING_POSITION, action) {
  switch(action.type) {
  case PLACE_PIECE:  
    return state.map((x, i) => {
      if(i === action.position){
        return {
          ...state,
          marker: action.playerTurn
        }
      } else {
        return {
          ...state,
          marker: x.marker
        }
      }
    });
  }
  return state;
}