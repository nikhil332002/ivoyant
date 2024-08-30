import React, { useState } from "react";

export const Counter:React.FC=()=>{

    const [count,setCount]=useState<number>(0);

    function handleCount():void{
        setCount(count+1);
    }
    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleCount} style={{marginRight:'5px'}}>Increment</button>
            {
                count>0? <button onClick={()=>setCount(count-1)}>Decrement</button>:<button onClick={()=>setCount(count-1)} disabled>Decrement</button>
            }
            
        </div>
    )
}