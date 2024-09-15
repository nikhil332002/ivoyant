import Child from "./Child"

const CustomComponent:React.FC=()=>{
    return(
        <>
        <h2>This is component</h2>
        </>
    )
}
const Parent=()=>{
    return(
        <>
            <Child Component={CustomComponent}/>
        </>
    )
}
export default Parent