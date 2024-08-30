import React, { useEffect, useState } from "react";

export const Effect:React.FC=()=>{

    const [todo,setTodo] = useState<string[]>([]);
    const [count,setcount] = useState<number>(0);

    function handleCount():void{
        setcount(()=>count+1);
    }

    function handleTodo(newTodo:string){
        setTodo([...todo,newTodo]);
    }

    

    return(
        <div>
            <div>
                <h2>Count: {count}</h2>
                <button onClick={handleCount}>Count</button>
            </div>
            <div>
                <ul>
                    {todo.map((todos,index)=>(
                        <li key={index}>{todos}</li>
                    ))}
                </ul>
                <button onClick={()=>handleTodo("TODO")}>Add Todo</button>
            </div>
        </div>
    )
}