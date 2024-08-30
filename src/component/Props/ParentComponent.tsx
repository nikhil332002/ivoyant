import React from "react"
import ChildComponent from "./ChildComponent"



const ParentComponent:React.FC=()=>{

    const data=[{
        name:"abc",
        age:10
    }]

    return(
        <div>
            <ChildComponent data={data}/>
        </div>
    )
}
export default ParentComponent;