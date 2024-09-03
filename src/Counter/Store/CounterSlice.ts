
import { createSlice } from '@reduxjs/toolkit';



//Type of slice state
interface CounterState{
    value:number;
}


//Initial state
const initialState:CounterState = {
    value:0
}


const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment: (state)=>{
            state.value = state.value + 1;
        },
        decrement:(state)=>{
            state.value = state.value - 1;
        }
    }
})

//export the action
export const {increment,decrement} = counterSlice.actions;

//export reducer
export default counterSlice.reducer;


