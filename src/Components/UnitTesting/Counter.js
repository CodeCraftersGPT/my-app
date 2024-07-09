// create counter component with initial value of 10 in the state and return h1 tag with count value
// have a button to increment the count value

import React,{useState} from 'react';

function Counter() {
    const [count, setCount] = useState(10);
    return (
        <div>
            <h1 data-testid="counter">count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Counter;
