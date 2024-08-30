import React from "react"

interface Greetprops{
    name:string,
    age:number
}


const Props:React.FC<Greetprops>=({name,age})=>{
  return(
    <div>
      <h2>Name is {name} and age is {age}</h2>
    </div>
  )
  
}
export default Props;
