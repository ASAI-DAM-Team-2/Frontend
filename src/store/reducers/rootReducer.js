import authReducer from "./authReducer";
import restaurantReducer from "./restaurantReducer";
import dishReducer from "./dishReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  restaurant: restaurantReducer,
  dish: dishReducer,
});

export default rootReducer;
