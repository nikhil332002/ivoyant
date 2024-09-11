import React, { useState } from "react";

interface User{
    name:string;
    age:number;
}
const Usestate:React.FC=()=>{

    const [user,setUser] = useState<User>({name:'',age:0});

    return(
        <div>
            <input type="text" value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})} />
            <input type="number" value={user.age} onChange={(e)=>setUser({...user,age: +e.target.value})} />
            <p>
                Name: {user.name}
                Age: {user.age}
            </p>
        </div>
    )
}
export default Usestate