import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    token: null,
  },
};
const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.data.token = action.payload;
    },
    logout: (state, action) => {
      const coba = action.payload = null
      state.data.token = coba;
    },
  },
});
export const {login, logout} = auth.actions
export default auth.reducer