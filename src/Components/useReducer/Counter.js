import React, { useReducer } from 'react';
import counterReducer,{initialState} from './counterReducer';



// in the counter what exacty we need
// first we need to display the count value stored in the counterreduder
// second we need to have three buttons to increment, decrement and reset the count value 
// dispatch the action to the counterreducer based on the button click
// the actions modify the count value in the counterreducer based on the action type

const Counter = () => {
     const [state, dispatch] = useReducer(counterReducer, initialState);

     // state holds the current state of the counter stored in the counter reducer
        // dispatch is used to dispatch actions to the counter reducer
    
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