
interface ChildProps{
    count: number;
    onClick: ()=>void;
}

const Child:React.FC<ChildProps>=({count,onClick})=>{
    return(
        <>
            <p>{count}</p>
            <button onClick={onClick}>Click</button>
        </>
    )
}
export default Child