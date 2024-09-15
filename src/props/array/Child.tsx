// interface ChildProps{
//     users:string[];
// }
// const Child:React.FC<ChildProps>=({users})=>{
//     return(
//         <>
//             <ul>
//                 {
//                     users.map((user,index)=>(
//                         <li key={index}>{user}</li>
//                     ))
//                 }
//             </ul>
//         </>
//     )
// }
// export default Child

interface ChildProps{
    name:string,
    age:number,
    gender:string
}
interface ChildListProps{
    people:ChildProps[];
}
const Child:React.FC<ChildListProps>=({people})=>{
    return(
        <>
            <ul>
                {
                    people.map((user,index)=>(
                        <li key={index}>Name: {user.name} and Age: {user.age} and Gender: {user.gender}</li>
                    ))
                }
            </ul>
        </>
    )
}
export default Child
