import { useEffect, useRef, useState } from "react"

const Test=()=>{

    const [num,setNum] = useState(0);
    const[count,setCount] = useState(10);
    const id = useRef<number>();

    const handleStart=()=>{
        id.current = setInterval(()=>{
            setCount((count)=>count-1);
        },1000) 
        console.log(id.current);
    }

    const handleStop=()=>{
        clearInterval(id.current);
    }

    useEffect(()=>{
        if(count === 0){
            console.log("loop");
            clearInterval(id.current);
            console.log(id.current);
        }
    },[count])

    const handleCount=()=>{
        setNum((num)=>num+1);
    }

    return(
        <>
    
         {count === 0? <h2>Time out!</h2>:<h2>Count: {count}</h2>}
         {count === 0? <h2>Max count is {num}</h2> : <h2>{num}</h2>}
        
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
        {
            count === 0? "":<button onClick={handleCount}>Count</button>
        }
        
        </>
    )
}
export default Test;