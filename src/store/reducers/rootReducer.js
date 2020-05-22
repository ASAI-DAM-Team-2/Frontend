import authReducer from "./authReducer";
import restaurantReducer from "./restaurantReducer";
import dishReducer from "./dishReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  restaurant: restaurantReducer,
  dish: dishReducer,
  user: userReducer,
});

export default rootReducer;
