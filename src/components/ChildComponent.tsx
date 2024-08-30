import React from "react";

interface ChildComponentProps{
    handleData: (data:string)=>void;
}

const ChildCompoonent:React.FC<ChildComponentProps>=({handleData})=>{

    const handleClick=()=>{
        handleData("hello");
    }

    return(
        <>
            <button onClick={handleClick}>Click</button>
        </>
    )
}
export default ChildCompoonent;