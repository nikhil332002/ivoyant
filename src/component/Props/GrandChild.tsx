import React from "react";

interface user{
    name:string;
    age:number;
    email:string;
    address?:string;
}
interface GrandUser{
    users:user;
}
        
const GrandChild:React.FC<GrandUser>=({users})=>{
    return(
        <div>
            <h2>Grand child</h2>
            <p>Name: {users.name}</p>
            <p>Name: {users.age}</p>
            <p>Name: {users.email}</p>
            {/* <p>{users.address}</p> */}
        </div>
    )
}
export default GrandChild;