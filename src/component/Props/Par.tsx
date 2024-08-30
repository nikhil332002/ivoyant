import React, { useState } from "react";
import Chi from "./Chi";



const Par:React.FC=()=>{

    const [data,setData] = useState<string>('');

    const display=(value:string):void=>{
    setData(value);
}

    return(
        <div>
            {data}
            <Chi sendData={display}/>
        </div>
    )
}
export default Par;