import { combineReducers } from 'redux';
import inputReducer from './reducer';

const rootReducer = combineReducers({
	inputState: inputReducer,
})

export default rootReducer;