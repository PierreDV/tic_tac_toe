import { combineReducers } from 'redux';
import SquaresReducer from './squares';

const rootReducer = combineReducers({
  squares: SquaresReducer
});

export default rootReducer;