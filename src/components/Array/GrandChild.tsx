import React from "react";

interface grandProps{
        id:number,
        name:string,
        age:number,
        designation:string
}
interface newGrandProps{
    grand:grandProps[];
}


const GrandChild:React.FC<newGrandProps>=({grand})=>{
    return(
        <div>
            <h2>grand child</h2>
            {
                grand.map((singleEle)=>(
                    <div>
                        {/* <p>{singleEle.id}</p> */}
                        <p>{singleEle.name}</p>
                        {/* <p>{singleEle.age}</p>
                        <p>{singleEle.designation}</p> */}
                    </div>
                ))
            }
        </div>
    )
}
export default GrandChild;