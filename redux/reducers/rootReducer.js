import darkModeReducer from "./darkModeReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: darkModeReducer,
});

export default rootReducer;
