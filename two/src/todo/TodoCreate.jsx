import { useState } from "react";

function TodoCreate( { ontodocreate } ){
    const [todo,setTodo] = useState('');
    const ontodochange = function(event){
        setTodo(event.target.value);
    }
    return(
        <>
            <input value={todo} onChange={ontodochange}/><button onClick={() => {ontodocreate(todo);setTodo('');}}>Add</button>
        </>
    );
}

export default TodoCreate;