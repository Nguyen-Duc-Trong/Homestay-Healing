import { createSlice } from "@reduxjs/toolkit";
export const configNavSlice = createSlice({
  name: "configNavSlice",
  initialState: {
    activeItem  : Number(localStorage.getItem('activeItem')) || 1
  },
  reducers: {
    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
    },
  }
});
export const { increment} = configNavSlice.actions;
export default configNavSlice.reducer;
