// create a counter component in functional style with increment count


import React,{useState,useCallback} from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = useCallback(()=>{
        setCount(count + 1)
    });
    
    return (
        <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}
export default Counter;
