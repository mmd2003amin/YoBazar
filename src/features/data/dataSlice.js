import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isLoading: false,
  error: "",
};

const fetchData = createAsyncThunk("data/fetchData", () => {
  const getData = axios
    .get("data.json")
    .then((res) => res)
    .catch((error) => error);

  return getData;
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    }),

    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false,
      state.data = action.payload,
      state.error = ""
    }),

    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false,
      state.data = [],
      state.error = action.error.message;
    });
  },
});

export default dataSlice.reducer;
export { fetchData };