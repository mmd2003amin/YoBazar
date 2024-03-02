import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      state.products.push(action.payload);
    },
    deleteFavorites:(state, action) => {
      state.products = action.payload
    }
  },
});

export default favoritesSlice.reducer;
export const { addFavorites , deleteFavorites } = favoritesSlice.actions;
