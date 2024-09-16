
import { useSelector, useDispatch } from 'react-redux';
import { DispatchState, RootState } from "./store";
import { increment,decrement } from './CounterSlice';
import { album, usePostUserMutation } from '../services/Api';
const Counter=()=>{
 


    const count = useSelector((state:RootState)=>state.counter.value)
    const users = useSelector((state:RootState)=>state.api.queries['getUsers(undefined)']?.data) as album[];
    const dispatch = useDispatch<DispatchState>();
    console.log("in slice ",users)
 
    

    return(
        <>
        <h2>Count: {count}</h2>
        <button onClick={()=>{
            dispatch(increment());
        }}>Increment</button>
           <button onClick={()=>{
            dispatch(decrement());
        }}>Decrement</button>
        </>
    )
}
export default Counter;