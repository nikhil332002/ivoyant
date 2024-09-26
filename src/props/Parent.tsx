import Child from "./Child";

export const ChildProps=()=>{
    return(
        <h1>Child Props</h1>
    )
}

const Parent=()=>{

    return(
    <>
        <Child childe={<h1>Child Props</h1>} />

    </>)
}
export default Parent;