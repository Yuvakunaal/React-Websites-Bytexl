/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import TodoCreate from "./TodoCreate"
import ToDoList from "./ToDoList";

function TodoApp(){
    const [todos,setTodos] = useState([]);
    const ontodoDelete = function(index){
        let new_todo = [];
        for(let i=0;i<todos.length;i++){
            if (i!==index){
                new_todo.push(todos[i]);
            }
        }
        setTodos(new_todo);
    }
    const ontodocreate = function(todo){
        const new_todos = [...todos,todo];
        setTodos(new_todos);
    }
    return(
        <>
            <h3 align="center">To-Do App</h3>
            <ToDoList todos={todos} ontodoDelete={ontodoDelete}/>
            <h1 align="center"><TodoCreate ontodocreate={ontodocreate}/></h1>
            
        </>
    );
}
export default TodoApp;