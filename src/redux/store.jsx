import { configureStore } from "@reduxjs/toolkit";
import downSlice from "./downSlice";

export const store = configureStore({
    reducer: {
        downReducer: downSlice
    }
})