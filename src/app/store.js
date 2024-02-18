import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/data/dataSlice";
import filterReducer from "../features/filter/filterSlice";

const store = configureStore({
  reducer: { data: dataReducer, filter: filterReducer},
});

export default store;
