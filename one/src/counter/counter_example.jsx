import { useState } from "react";

function CounterExample( ){
    const [count,setCount] = useState(0);
    const onCount = function(){
        setCount(count+1)
    }
    return (
        <>
            <h3>Counter</h3>
            <button onClick={onCount}>count : {count}</button>
            <p>{count}</p>
        </>
    )
}

export default CounterExample;