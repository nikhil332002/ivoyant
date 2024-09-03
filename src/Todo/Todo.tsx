import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  todoDispatch, todoState } from "./TodoStore";
import { addTodo, removeTodo, toggleTodo } from "./TodoSlice";


const Todo:React.FC=()=>{

    const printTodos = useSelector((state:todoState)=>state.todos.todos)
    const dispatch = useDispatch<todoDispatch>()
    // console.log(printTodos);
    

    const [newTodo,setNewTodo] = useState('');

    const handleAddTodo =()=>{
        dispatch(addTodo(newTodo));
        setNewTodo('');
    }

    return(
        <>
            <input 
                type="text"
                value={newTodo}
                onChange={(e)=>setNewTodo(e.target.value)} 
                placeholder="New Todo"
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {printTodos.map((todo) => (
                <li key={todo.id}>
                    <span
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' , cursor: 'pointer'}}
                    onClick={() => dispatch(toggleTodo(todo.id))}
                    >
                    {todo.text}
                    </span>
                <button onClick={() => dispatch(removeTodo(todo.id))} style={{marginLeft: '20px', marginBottom: '5px'}}>Remove</button>
            </li>
            ))}
            </ul>
        </>
    )


}
export default Todo;