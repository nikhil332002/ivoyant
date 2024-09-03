import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Todo{
    id: number;
    text: string;
}

interface TodoState{
    todos: Todo[];
}

const initialState: TodoState = {
    todos: [],
}

const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action: PayloadAction<string>) => {
            const newTodo:Todo={
                id:state.todos.length + 1,
                text:action.payload,
            };
            state.todos.push(newTodo);
        },
        removeTodo:(state,action: PayloadAction<number>) => {
            state.todos = state.todos.filter(todo=>todo.id !== action.payload);
        },
    }
})

export const {addTodo,removeTodo} = todoSlice.actions;
export default todoSlice.reducer;