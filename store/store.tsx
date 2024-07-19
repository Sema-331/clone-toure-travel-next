import { configureStore } from "@reduxjs/toolkit";
import slice from './../slice/slices';

export const store = configureStore({
    reducer: {
        redSlice: slice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch