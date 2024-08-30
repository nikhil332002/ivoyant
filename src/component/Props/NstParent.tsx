import React from "react";
import NstChild from "./NstChild";


const NstParent:React.FC=()=>{

const user={
    name:"Nikhil",
    age:22,
    Address:{
        state:"Karnataka",
        district:"Davangere",
    }
}

    return(
        <div>
            <NstChild user={user}/>
        </div>
    )
}
export default NstParent;