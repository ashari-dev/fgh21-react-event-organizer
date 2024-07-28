import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataEvent: [],
};
const event = createSlice({
  name: "event",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.dataEvent = [...action.payload];
    },
    
  },
});
export const {addEvent} = event.actions
export default event.reducer