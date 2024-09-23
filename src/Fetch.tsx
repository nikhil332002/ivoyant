import { useEffect, useState } from "react"

interface dataType{
    email:string;
}
const Fetch=()=>{

    const [data,setData] = useState<dataType[]>([]);

    const fetchApi= async()=>{
        const res = await fetch('https://randomuser.me/api/?results=20')
        const result = await res.json();
        setData(result.results)
        console.log("result",result);  
    }

    useEffect(()=>{
        fetchApi()
    },[])

    console.log(data);

    var sortedName = data.map((user)=>user.email).sort();
    console.log(sortedName);
    
    return(
        <div>
            <ul>
                {
                    sortedName.map((user,id)=>(
                        <li key={id}>{user}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Fetch