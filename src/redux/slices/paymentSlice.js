import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  order: {},
};

export const getOrder = createAsyncThunk(
  "excursion/getOrder",
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


const paymentSlice = createSlice({
  name: "payment",
  initialState,
  extraReducers: {
    [getOrder.pending]: (state, action) => {
      state.loading = true;
    },
    [getOrder.fulfilled]: (state, action) => {
      state.loading = false;
      state.order = action.payload;
    },
  },
});

// export const {
// } = excursionSlice.actions

export default paymentSlice.reducer;
