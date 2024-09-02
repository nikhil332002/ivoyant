import React from "react"
import ArrayChild from "./ArrayChild";


const ArrayParent:React.FC=()=>{

    const data=[{
        name:"nikhil",
        age:22
    }]

    return(
        <div>
            <ArrayChild children={data}/>
        </div>
    )
}
export default ArrayParent;