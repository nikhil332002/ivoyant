import { useMemo, useState } from "react";


const Parent=()=>{
    const [count,setCount] = useState(1);
    const [text,setText] = useState("");

    const mul=(num:number)=>{
        console.log("render");
        return num+1;
    }

    const display=useMemo(()=>mul(count),[count,text]);

    const handleClick=()=>{
        setCount(count+1);
    }

    return(
        <>
        <h2>Count: {count}</h2>
        <h2>Memorized: {display}</h2>
        <h2>Text: {text}</h2>
           <button onClick={handleClick}>Count</button> 
           <input type="text" onChange={(e)=>setText(e.target.value)}/>
        </>
    )
}

export default Parent;