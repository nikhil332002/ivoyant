import React from "react";

interface ChildProps{
    name:string;
    age?:number,
    email:string,
}

const Child:React.FC<ChildProps>=({name,age,email})=>{
    return(
        <>
            <p>{name}</p>
            <p>{age}</p>
            <p>{email}</p>
        </>
    )
}
export default Child