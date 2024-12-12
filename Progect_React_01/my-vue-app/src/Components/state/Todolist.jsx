import React from "react";
import { useState } from "react";

function Todolist(){
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos(prevTodos=> [...prevTodos, todo]); // aggiungi un nuovo todo 

    };

    return (
        <div>
            <button onClick={()=> addTodo('Nuovo Todo')}>
                Aggiungi Todo
            </button>
            <ul>
                {todos.map((todo, index) =>(
                    <li key={index}>{todo}</li>

                ))}
            </ul>
        </div>
    )
}
export default Todolist

