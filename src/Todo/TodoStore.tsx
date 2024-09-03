import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";

export const TodoStore = configureStore({
    reducer:{
        todos: TodoSlice
    },
})

export type todoState = ReturnType<typeof TodoStore.getState>
export type todoDispatch = typeof TodoStore.dispatch;
