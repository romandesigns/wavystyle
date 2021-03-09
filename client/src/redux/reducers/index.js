// Dependencies
import { combineReducers } from "redux";

// Reducers
import themeReducer from "./themeReducer";

const store = combineReducers({
  theme: themeReducer,
});

export default store;
