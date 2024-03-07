import { createSlice } from "@reduxjs/toolkit";
const signIn = localStorage.getItem("user") || [];

const initialState = {
  products: signIn.length
    ? JSON.parse(localStorage.getItem("favorites")) || []
    : [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      state.products.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.products));
    },
    deleteFavorites: (state, action) => {
      state.products = action.payload;
      localStorage.setItem("favorites", JSON.stringify(state.products));
    },
  },
});

export default favoritesSlice.reducer;
export const { addFavorites, deleteFavorites } = favoritesSlice.actions;
