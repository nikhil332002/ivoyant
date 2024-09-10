import React from "react"

type greetprops={
    name?:string
}

const Greet:React.FC<greetprops>=({name})=>{
    return(
        <div>Hello {name}</div>
    )
}
export default Greet