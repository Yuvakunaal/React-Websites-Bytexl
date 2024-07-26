import { useState } from "react";

function CounterSimple(){
    const [count,setCount] = useState(0);
    const incCount = function(){
        setCount(count+1);
    }
    const deccount = function(){
        if (count === 0){return;}
        setCount(count-1);
    }
    return(
        <>  
            <h3>Inc & dec Counter :-</h3>
            <p><strong>Count : </strong>{count}</p>
            <p>
                <button onClick={incCount}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg></button>
                &nbsp;
                <button onClick={deccount}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-440v-80h560v80H200Z"/></svg></button>
            </p>
        </>
    )
}

export default CounterSimple