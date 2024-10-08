import { useState } from "react";

interface DataType{
    name: string;
    main:{
        humidity: number;
        temp: number;
    }
}
const Page=()=>{

    const [data,setData] = useState<DataType>();
    const [city,setCity] = useState<string>();

    const API_KEY = 'ffe6045af019031036d19edcb02e9781'

    const fetchApi=async()=>{
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            const result = await res.json();
            console.log(result); 
            setData(result)  
    }



    return(
        <>
            <input type="text" onChange={(e)=>setCity(e.target.value)}/>
            <button onClick={fetchApi}>Search</button>
            {
                data && <div>City: {data?.name} | Humidity: {data?.main.humidity} | Temperature: {data?.main.temp} </div>
            }
            
        </>
    )
}
export default Page;