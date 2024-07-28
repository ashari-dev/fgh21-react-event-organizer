import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth.js";
import event from "./event.js";
import profile from "./profile.js";

const reducer = combineReducers({
  auth,
  event,
  profile,
});

export default reducer;
