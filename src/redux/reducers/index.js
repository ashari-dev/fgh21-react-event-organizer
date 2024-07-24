import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth.js";
import event from "./event.js";

const reducer = combineReducers({
  auth,
  event,
});

export default reducer;
