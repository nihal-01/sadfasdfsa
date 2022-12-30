import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
    loading: false,
    Home: {},
    topAttractions: [],
    bestSellingAttractions: [],
    countries: [],
};

// export const getState = createAsyncThunk(
//     "general/getState",
//     async(args, {getState}) => {
//         const response =  await axios.get('/general/state')
//         return response.data;
//     }
// )

// get single logo for navbar
export const getHome = createAsyncThunk(
    "general/getHome",
    async (args, { getState }) => {
        // const { token } = getState().user
        // const config = {
        //     headers: {
        //         Authorization: `Bearer ${token}`,
        //       },
        // }
        const response = await axios.get(`/home/`);
        return response.data;
    }
);

export const fetchInitialData = createAsyncThunk(
    "usersSlice/fetchInitialData",
    async (_, { getState }) => {
        const response = await axios.get("/home/initial-data");
        return response.data;
    }
);

const generalSlice = createSlice({
    name: "general",
    initialState,
    extraReducers: {
        [getHome.pending]: (state, action) => {
            state.loading = true;
        },
        [getHome.fulfilled]: (state, action) => {
            state.loading = false;
            state.home = action.payload?.home;
            state.topAttractions = action.payload?.topAttractions;
            state.bestSellingAttractions =
                action.payload?.bestSellingAttractions;
        },
        [fetchInitialData.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.countries = action.payload?.countries;
        },
    },
});

export default generalSlice.reducer;
