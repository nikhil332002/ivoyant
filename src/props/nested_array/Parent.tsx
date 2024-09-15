import Child from "./Child"

const Parent=()=>{

    const data=[
        {
        name:"nikhil",
        age:22,
        address:{
            district:'davangere',
            state:'karnataka',
        }
    }
    ]

    return(
        <>
            <Child data={data}/>
        </>
    )
}
export default Parent