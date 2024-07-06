import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: "searchSlide",
  initialState: {
    area: [],
    minPrice: 0,
    maxPrice: 9999999999,
    minAcreage: 0,
    maxAcreage: 9999999999,
    province: [],
    category: []
  },
  reducers: {
    setFilterArea: (state, action) => {
        state.area = action.payload;
      },
    setFilterPrice: (state, action) => {
        state.minPrice = action.payload.Min;
        state.maxPrice = action.payload.Max;
    },
    setFilterAcreage: (state, action) => {
        state.minAcreage = action.payload.Min;
        state.maxAcreage = action.payload.Max;
    },
    setProvince: (state, action) => {
      state.province = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload
    }
  }
});

export const {setFilterArea, setFilterPrice, setFilterAcreage, setProvince, setCategory } = searchSlice.actions;
export default searchSlice.reducer;