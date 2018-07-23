import movesReducer from './moves_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    moves: movesReducer
});