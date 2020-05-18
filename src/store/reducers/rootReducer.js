import authReducer from './authReducer';
import restaurantsReducer from './restaurantsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  restaurants: restaurantsReducer,
});

export default rootReducer;
