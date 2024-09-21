import { useEffect, useState } from "react"


interface User {  
    email: string; 
  }
  
const Fetch=()=>{

    const [data,setData] = useState<User[] | undefined>(undefined);
    const [emails,setEmails] = useState<string[] | undefined>(undefined)

    const fetchApi= async()=>{
        const res = await fetch('https://randomuser.me/api/?results=20');
        const result = await res.json();
        setData(result?.results);
        console.log(data);
    }
    // console.log("in state",data);
    
    const addd = async() =>{
        // console.log(data?.sort());
        const dataa = data?.map((item)=>item.email);
        console.log(dataa);
        setEmails(dataa?.sort());
    }
    useEffect(()=>{
        fetchApi();
        addd();
    },[setData,setEmails])

    return(
        <div>
            <ul>
                {
                    emails?.map((user)=>(
                        <li>{user}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Fetch