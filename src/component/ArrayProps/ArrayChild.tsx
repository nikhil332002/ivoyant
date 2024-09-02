import React from "react";

interface ChildProps{
    name:string,
    age:number,
}

interface ParentProps{
    children:ChildProps[];
}


const ArrayChild:React.FC<ParentProps>=({children})=>{
    return(
        <div>
            {
                children.map((child,index)=>(
                    <div key={index}>
                        <p>Name: {child.name}</p>
                        <p>Age: {child.age}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default ArrayChild;