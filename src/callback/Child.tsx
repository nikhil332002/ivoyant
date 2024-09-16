import { useState } from "react"

interface ChildProps{
    handleChildData: (value:number)=>void
}
const Child:React.FC<ChildProps>=({handleChildData})=>{

    const [count,setCount] = useState<number>(0)

    const increment=()=>{
        setCount(count+1);
        handleChildData(count);
    }

    return(
        <>
            <button onClick={increment}>Click</button>
        </>
    )
}
export default Child