import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../axios";

const initialState = {
    isSiteLoading: true,
    user: {},
    countries: [],
    jwtToken: localStorage.getItem("random-string") || "",
    isLoggedIn: false,
};

const fetchUser = createAsyncThunk(
    "usersSlice/fetchUser",
    async (_, { getState }) => {
        const { jwtToken } = getState().users;
        if (jwtToken) {
            const response = await axios.get("/users/my-account", {
                headers: {
                    authorization: `Bearer ${jwtToken}`,
                },
            });
            return response.data;
        } else {
            throw Error("");
        }
    }
);

const usersSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload?.user;
            state.jwtToken = action.payload?.jwtToken;
            state.isLoggedIn = true;

            localStorage.setItem("random-string", action.payload?.jwtToken);
        },
    },
    extraReducers: {
        [fetchUser.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isSiteLoading = false;
        },
        [fetchUser.rejected]: (state, action) => {
            state.isSiteLoading = false;
            localStorage.removeItem("random-string");
        },
    },
});

export { fetchUser };

export const { setUser } = usersSlice.actions;

export default usersSlice.reducer;
