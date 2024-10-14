import { useCallback, useMemo, useState } from "react";
import Child from "./Child";


const Parent=()=>{
    
    const [count, setCount] = useState(0);
    const [text,setText] = useState("")

    const handleClick=()=>{
        setCount(count+1)
    }

    const display=useCallback(()=>{
        console.log("rendering");      
    },[count])

    return(
        <>
            <h2>Count: {count}</h2>
            <h2>Text: {text}</h2>
            <button onClick={handleClick}>Click</button>
            <input type="text" onChange={(e)=>setText(e.target.value)}/>
            <Child display={display} />
        </>
    )
}

export default Parent;