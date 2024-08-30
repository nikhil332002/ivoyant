import React, { useState } from "react"
import ChildCompoonent from "./ChildComponent";


const ParentComponent:React.FC=()=>{

    const [childData,setChildData]=useState<string>('');

    const handleData=(data:string)=>{
        setChildData(data);
    }

    return(
        <>
            <h2>Data: {childData}</h2>
            <ChildCompoonent handleData={handleData}/>
        </>
    )
}
export default ParentComponent;