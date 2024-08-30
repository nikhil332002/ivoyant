import React from "react"

interface Data{
    name:string;
    age: number;
}
interface userData{
    data:Data[];
}


const ChildComponent:React.FC<userData>=({data})=>{
    return(
        <div>
            <ul>
                {
                    data.map((datas,index)=>(
                        <li key={index}>{datas.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ChildComponent;