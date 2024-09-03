import { useDispatch, useSelector } from "react-redux";
import { RootType } from "./TodoStore";
import { useState } from "react";
import { addTodo, removeTodo } from "./TodoSlice";



 function TodoList(){
    const todos = useSelector((state:RootType) =>state.todo.todos);
    const dispatch = useDispatch();

    const [newTodo,setNewTodo] = useState('');

    function handleAddTodo(){
        dispatch(addTodo(newTodo));
        setNewTodo('');
    }

    return(
        <>
            <h1>Todo List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e)=>setNewTodo(e.target.value)}
                placeholder="New todo"
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                {todo.text}
                <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
                </li>
            ))}
            </ul>

        </>
    )

}
export default TodoList;