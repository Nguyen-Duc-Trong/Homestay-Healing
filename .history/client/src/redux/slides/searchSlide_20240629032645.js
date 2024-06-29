import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: "searchSlide",
  initialState: {
    area1: 'all',
    minPrice: 0,
    maxPrice: 9999999999,
    minAcreage: 0,
    maxAcreage: 9999999999,

    area: [],
    province: [],
    category: [],
    price: []
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
    },
    setAcreages: (state, action) => {
      state.area2 = action.payload
    },
    setPrice: (state, action) => {
      state.price = action.payload
    }
  }
});

export const {setFilterArea, setFilterPrice, setAcreages,setFilterAcreage, setProvince, setCategory, setPrice } = searchSlice.actions;
export default searchSlice.reducer;