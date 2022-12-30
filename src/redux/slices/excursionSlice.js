import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  loading: false,
  excursion: {},
  reviews: [],
};

export const getExcursions = createAsyncThunk(
  "excursion/getExcursions",
  async (args, { getState }) => {
    // const { token } = getState().user
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    const response = await axios.get("/attractions/single/63ac0a9e23d63a74a8cad48b");
    return response.data;
  }
);

export const getReviews = createAsyncThunk(
  "excursion/getReviews",
  async (args, { getState }) => {
    // const { token } = getState().user
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    const response = await axios.get("/attractions/reviews/single/63ac0a9e23d63a74a8cad48b");
    return response.data;
  }
);

const excursionSlice = createSlice({
  name: "excursion",
  initialState,
  extraReducers: {
    [getExcursions.pending]: (state, action) => {
      state.loading = true;
    },
    [getExcursions.fulfilled]: (state, action) => {
      state.loading = false;
      state.excursion = action.payload;
    },
    [getReviews.pending]: (state, action) => {
      state.loading = true;
    },
    [getReviews.fulfilled]: (state, action) => {
      state.loading = false;
      state.reviews = action.payload;
    },
  },
});

// export const {
// } = excursionSlice.actions

export default excursionSlice.reducer;
