import authReducer from './authReducer';
import restaurantReducer from './restaurantReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  restaurant: restaurantReducer,
});

export default rootReducer;
