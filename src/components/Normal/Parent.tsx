import React from "react"
import Child from "./Child"


const Parent:React.FC=()=>{

    const data={
        id:1,
        name:"John",
        age:25,
        designation:"software Engineer",
        salary:25000
    }

    return(
        <div>
            <h2>This is parent</h2>
            <Child send={data} />
        </div>
    )
}
export default Parent