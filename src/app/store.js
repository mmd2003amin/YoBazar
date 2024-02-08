import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/data/dataSlice";

const store = configureStore({
  reducer: { data: dataReducer },
});

export default store;