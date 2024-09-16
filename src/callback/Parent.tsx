import { useState } from "react"
import Child from "./Child";

const Parent=()=>{

    const [count,setCount] = useState<number>(0);

    const handleChildData=(value:number)=>{
        setCount(value);
    }

    return(
        <>
            <h2>Count: {count}</h2>
            <Child handleChildData={handleChildData}/>
        </>
    )
}
export default Parent;
