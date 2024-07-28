import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
    },
    removeData: (state, action) => {
      const coba = (action.payload = {});
      state.data = coba;
    },
  },
});
export const { addData, removeData } = profile.actions;
export default profile.reducer;
