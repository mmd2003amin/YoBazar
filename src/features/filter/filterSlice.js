import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  haveProduct: false,
  sortBy:"",
  filterPrice:null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    available: (state) => {
      state.haveProduct = !state.haveProduct;
    },
    sort:(state,action) => {
      state.sortBy = action.payload;
    },
    filterPrice:(state,action) => {
      state.filterPrice = action.payload;
    }
  },
});

export default filterSlice.reducer;
export const { available , sort , filterPrice } = filterSlice.actions;
