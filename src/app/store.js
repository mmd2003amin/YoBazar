import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/data/dataSlice";
import filterReducer from "../features/filter/filterSlice";
import favoritesReducer from "../features/favorites/favoritesSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
    filter: filterReducer,
    favorites: favoritesReducer,
  },
});

export default store;
