
interface childProps{
    state:string,
    district:string,
}
interface details{
    name:string,
    age:number,
    address:childProps,
}
interface users{
    data:details[];
}

const Child:React.FC<users>=({data})=>{
    return(
        <>
            <ul>
                {
                    data.map((single,index)=>(
                        <li>{single.name} and {single.address.state}</li>
                    ))
                }
            </ul>
        </>
    )
}
export default Child