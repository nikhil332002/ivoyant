import React from "react";


interface ChildProps{
    id:number,
    name:string,
    age:number,
    designation:string,
    salary:number
}
interface newChildProps{
    send:ChildProps;
}

const Child:React.FC<newChildProps>=({send})=>{
    return(
        <div>
            <p>{send.id}</p>
            <p>{send.name}</p>
            <p>{send.age}</p>
            <p>{send.designation}</p>
            <p>{send.salary}</p>
        </div>
    )
}
export default Child