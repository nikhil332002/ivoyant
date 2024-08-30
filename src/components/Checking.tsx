import React, { useState } from "react"


const Checking=()=>{
    const [data,setData]=useState<string>('');
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setData(e.target.value)   
   }
    return(
        <div>
            <input type="text"  value={data} onChange={handleChange}/>
        </div>
    );
}

export default Checking;