import React, { useReducer } from 'react';
import counterReducer,{initialState} from './counterReducer';

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    
    return (
        <div>
        <h1>Count: {state.count}</h1>
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
    }
    export default Counter;