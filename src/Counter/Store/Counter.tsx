
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./Store";
import { decrement, increment } from "./CounterSlice";


export function Counter(){
    const count = useSelector((state:RootState)=>state.counter.value);
    const dispatch = useDispatch();

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default Counter;
