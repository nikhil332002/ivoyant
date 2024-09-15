import {  ComponentType } from "react"

interface ChildProps{
    Component:ComponentType
}

const Child:React.FC<ChildProps>=({Component})=>{
    return(
        <>
            <Component/>
        </>
    )
}
export default Child