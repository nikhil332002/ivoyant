import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from './Store';
import { decrement, increment } from './CounterSlice';
import React from 'react';



const Counter:React.FC=()=>{
    const count = useSelector((state:RootState)=>state.counter.value);
    const dispatch = useDispatch<AppDispatch>();
    
    
    return(
        <>
            <h2>{count}</h2>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </>
    )
}
export default Counter;