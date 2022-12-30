import { configureStore } from "@reduxjs/toolkit";
import {
    excursionReducer,
    generalReducer,
    paymentReducer,
    usersReducer,
} from "./slices";

const store = configureStore({
    reducer: {
        excursion: excursionReducer,
        general: generalReducer,
        payment: paymentReducer,
        users: usersReducer,
    },
    devTools: true,
});

export default store;
