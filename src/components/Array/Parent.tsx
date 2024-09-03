import Child from "./Child";


const Parent=()=>{

    const data=[{
        id:1,
        name:"abc",
        age:20,
        designation:"design"
    },
    {
        id:2,
        name:"jdd",
        age:20,
        designation:"fdh"
    },
    {
        id:3,
        name:"dhks",
        age:20,
        designation:"ggfg"
    },
    {
        id:4,
        name:"skddk",
        age:20,
        designation:"sdfd"
    },

]


    return(
        <div>
            <Child data={data}/>
        </div>
    )
}
export default Parent;