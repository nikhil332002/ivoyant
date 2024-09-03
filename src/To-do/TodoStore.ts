import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";

export const store = configureStore({
    reducer:{
        todo:TodoSlice
    }
}) 

export type RootType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;