import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: "provinceSlide",
  initialState: {
    province: [],
  },
  reducers: {
    setProvince: (state, action) => {
        state.province = action.payload;
      },
  }
});

export const {setFilterArea, setFilterPrice, setFilterAcreage } = searchSlice.actions;
export default searchSlice.reducer;