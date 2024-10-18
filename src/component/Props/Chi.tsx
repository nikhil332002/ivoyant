import React from "react";

interface Val{
    sendData: (value:string)=>void;
}

const Chi:React.FC<Val>=({sendData})=>{
    return(
        <div>
           <button onClick={()=>sendData("hi")}>click</button>
           <button onClick={()=>sendData("hi")}>click</button>
        </div>
    )
}
export default Chi;