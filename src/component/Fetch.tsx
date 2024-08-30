import React, { useEffect, useState } from "react";

interface User{
    firstName:string;
    lastName:string;
    age:number;
}

export const Fetch:React.FC=()=>{

    const [userData,setUserData] = useState<User[]>([]);

    async function apiFetch() {
        const res= await fetch('https://dummyjson.com/users');
        const data=await res.json();
        setUserData(data.users)
        // console.log(data);  
    }

    useEffect(()=>{
        apiFetch();
    },[])
    console.log(userData);
   
    return(
        <div>
            <ul>
                {userData.map((users,id)=>(
                    <li key={id}>{users.firstName}{users.lastName}</li>
                ))}
            </ul>
        </div>
    )
}