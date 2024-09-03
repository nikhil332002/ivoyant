import React from "react";
import GrandChild from "./GrandChild";


interface UserData{
    id:number;
    name:string;
    age:number;
    designation:string;
}

interface ParentProps{
    data:UserData[];
}



const Child:React.FC<ParentProps>=({data})=>{
    return(
        <div>
            <h2>child</h2>
            {
                data.map((singleData)=>(
                    <div>
                        <p>{singleData.id}</p>
                        {/* <p>{singleData.name}</p>
                        <p>{singleData.age}</p>
                        <p>{singleData.designation}</p> */}
                    </div>  
                ))
            }
            <div>
                <GrandChild grand={data}/>
            </div>
        </div>
    )
}
export default Child;