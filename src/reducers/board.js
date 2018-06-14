import { PLACE_MARKER } from '../actions';

const STARTING_POSITION = [
  {magicInt: 2, marker:null },
  {magicInt: 7, marker:null },
  {magicInt: 6, marker:null },
  {magicInt: 9, marker:null },
  {magicInt: 5, marker:null },
  {magicInt: 1, marker:null },
  {magicInt: 4, marker:null },
  {magicInt: 3, marker:null },
  {magicInt: 8, marker:null }
]

export default function(state = STARTING_POSITION, action) {
  switch(action.type) {
  case PLACE_MARKER:
    return state.map((square, i) => {
      if(i === Number(action.position)) {
        return {
          ...state[i],
          marker: action.playerTurn
        }
      } else {
        return {
          ...state[i],
          marker: square.marker
        }
      }
    })
  }
  return state;
}