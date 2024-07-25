import { useState } from "react"

function CounterExtended(){
    const [count,setCount] = useState(0);
    const [offset,setoffset] = useState(1);
    const onplus = function(){
        setCount(count+offset);
    };
    const onminus = function(){
        if ((count-offset) <= 0){
            setCount(0);
            return;
        }
        setCount(count-offset);
    };
    const onoffsetchange = function(event){
        setoffset(parseInt(event.target.value));
    };

    return(
        <>
            <h3>Counter Extended</h3>
            <p><strong>count = </strong>{count}</p>
            <button onClick={onplus}><svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg></button>
            <input type="number" min="1" max="10" value={offset} onChange={onoffsetchange}/>
            <button onClick={onminus}><svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-440v-80h560v80H200Z"/></svg></button>
        </>
    );
}

export default CounterExtended;