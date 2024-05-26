import { createSlice } from "@reduxjs/toolkit";

const initialActiveItem = Number(localStorage.getItem('activeItem')) || 1;
const initialActiveItemPs = Number(localStorage.getItem('activeItem')) || 1;
export const main1Slice = createSlice({
  name: "main1",
  initialState: {
    activeItem: initialActiveItem,
    activeItemPs : initialActiveItemPs
  },
  reducers: {
    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
      localStorage.setItem('activeItem', action.payload); // Cập nhật localStorage mỗi khi giá trị thay đổi
    },
    setActiveItemPs: (state, action) => {
      state.activeItem = action.payload;
      localStorage.setItem('activeItem', action.payload); // Cập nhật localStorage mỗi khi giá trị thay đổi
    },
  }
});

export const { setActiveItem, setActiveItemPs } = main1Slice.actions;
export default main1Slice.reducer;