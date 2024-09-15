// import Child from "./Child"

// const Parent=()=>{
//     return(
//         <>
//             <Child users={['nikhil','pavan','vignesh','suraj']}/>
//         </>
//     )
// }
// export default Parent

import Child from "./Child"

const Parent=()=>{
    const peopleArray=[
        {name:'abc',age:10,gender:'male'},
        {name:'hsb',age:20,gender:'female'},
        {name:'ifb',age:30,gender:'male'},  
    ]
    return(
        <>
            <Child people={peopleArray}/>
        </>
    )
}
export default Parent