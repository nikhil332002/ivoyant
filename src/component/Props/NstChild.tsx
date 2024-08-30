import React from "react"

interface address{
    state:string;
    district:string;
}

interface info{
    name: string;
    age:number;
    Address:address;
}

interface User{
    user:info;
}

const NstChild:React.FC<User>=({user})=>{
    return(
        <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>District: {user.Address.district}</p>
            <p>State: {user.Address.state}</p>
        </div>
    )
}
export default NstChild;