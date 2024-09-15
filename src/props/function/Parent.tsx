import { useState } from "react"
import Child from "./Child"

const Parent=()=>{
    const [count,setCount] = useState(0)
    const handleCount=()=>{
        setCount(count+1)
    }
    return(
        <>
           <Child count={count} onClick={handleCount}/> 
        </>
    )
}
export default Parent